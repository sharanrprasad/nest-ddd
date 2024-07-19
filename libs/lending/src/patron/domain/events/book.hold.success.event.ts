import { PatronEvent } from 'libs/lending/src/patron/domain/events/patron.event';

export class BookHoldSuccessEvent extends PatronEvent {
  constructor(
    public patronId: string,
    public readonly bookId: string,
    public readonly libraryBranchId: string,
    public readonly numberOfDays?: number,
  ) {
    super();
  }
}
