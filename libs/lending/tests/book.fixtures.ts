import { AvailableBook } from '@repo/lending/book/domain/book';
import { v4 as uuid } from 'uuid';

export class BookFixtures {
  static circulatingBook(): AvailableBook {
    const bookId = uuid();
    const libraryBranchId = uuid();
    return new AvailableBook(bookId, 1, libraryBranchId);
  }
}
