import { AvailableBook } from '../../../book/domain/book';
import { Patron } from '../../../patron/domain/patron';

export class Acceptance {}

export class Rejection {}

export interface PlaceOnHoldPolicyFunction {
  (
    book: AvailableBook,
    patron: Patron,
    duration?: number,
  ): Acceptance | Rejection;
}

export class PlaceOnHoldPolicy {
  static regularPatronMaxHold: PlaceOnHoldPolicyFunction = (book, patron) => {
    if (patron.isRegular() && !patron.isMaxHolds()) {
      return new Acceptance();
    }
    return new Rejection();
  };

  static allPolicies() {
    return [PlaceOnHoldPolicy.regularPatronMaxHold];
  }
}
