import { PatronEvent } from '../../../patron/domain/events/patron.event';

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
