export class Book {
  constructor(
    public bookId: string,
    public version: number,
  ) {}
}

export class AvailableBook extends Book {
  constructor(
    public bookId: string,
    public version: number,
    public branch: string,
  ) {
    super(bookId, version);
  }
}

export class OnHoldBook extends Book {
  // These are value objects and must be their own types. Implement with tiny-types.
  constructor(
    public readonly bookId: string,
    public readonly libraryBranchId: string,
    public readonly patronId: string,
    public readonly version: number,
  ) {
    super(bookId, version);
  }
}
