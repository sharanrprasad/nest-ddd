import { PatronInformation } from './value-objects/patron.information';
import { PatronHolds } from './value-objects/patron.holds';
import {
  Acceptance,
  PlaceOnHoldPolicyFunction,
} from 'libs/lending/src/patron/domain/policies/place.on.hold.policy';
import { AvailableBook, Book } from 'libs/lending/src/book/domain/book';
import { PatronType } from 'libs/lending/src/patron/infrastructure/models/patron.db.entity';
import { BookHoldSuccessEvent } from 'libs/lending/src/patron/domain/events/book.hold.success.event';

export class Patron {
  constructor(
    private patronInformation: PatronInformation,
    private patronHolds: PatronHolds,
    private patronPolicies: PlaceOnHoldPolicyFunction[],
  ) {}
  //TODO  - Change the duration to data range from just a number.
  placeOnHold(book: AvailableBook, duration?: number) {
    if (this.canHold(book, duration)) {
      return new BookHoldSuccessEvent(
        this.patronInformation.patronId,
        book.bookId,
        book.libraryBranchId,
        duration,
      );
    }
    //TODO - Return a book hold failed event here.
    throw new Error('failed');
  }

  canHold(book: Book, duration?: number): boolean {
    return this.patronPolicies.every(
      (policy) => policy(book, this, duration) instanceof Acceptance,
    );
  }

  isRegular() {
    return this.patronInformation.patronType === PatronType.Regular;
  }

  isMaxHolds() {
    return this.patronHolds.isMaxHolds();
  }
}
