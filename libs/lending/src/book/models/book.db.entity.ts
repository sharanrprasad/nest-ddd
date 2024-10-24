export enum BookType {
  Circulating = 'circulating',
  Restricted = 'restricted',
}

export enum BookState {
  OnHold = 0,
  Available = 1,
}
export interface BookDbEntity {
  bookId: string;
  bookType: BookType;
  bookState: BookState;
  availableAtBranch?: string;
  onHoldAtBranch?: string;
  onHoldByPatron?: string;
  version: number;
}
