import { BookDbEntity, BookState, BookType } from '../models/book.db.entity';
import { AvailableBook, OnHoldBook } from './book';

export class BookFactory {
  static toBookDomainModel(bookDbEntity: {
    availableAtBranch: string;
    bookId: string;
    bookState: BookState;
    bookType: BookType;
  }) {
    if (bookDbEntity.bookId) {
      return bookDbEntity.bookState === BookState.Available
        ? BookFactory.toAvailableBookDomainModel(bookDbEntity)
        : BookFactory.toOnHoldBookDomainModel(bookDbEntity);
    }
    throw new Error('Book id not defined');
  }

  static toAvailableBookDomainModel(bookDbEntity: BookDbEntity): AvailableBook {
    if (
      bookDbEntity.bookState === BookState.Available &&
      bookDbEntity.availableAtBranch
    ) {
      return new AvailableBook(
        bookDbEntity.bookId,
        bookDbEntity.version,
        bookDbEntity.availableAtBranch,
      );
    }
    throw new Error('Book is not available');
  }

  static toOnHoldBookDomainModel(bookDbEntity: BookDbEntity): OnHoldBook {
    if (bookDbEntity.onHoldByPatron && bookDbEntity.onHoldAtBranch) {
      return new OnHoldBook(
        bookDbEntity.bookId,
        bookDbEntity.onHoldAtBranch,
        bookDbEntity.onHoldByPatron,
        bookDbEntity.version,
      );
    }
    throw new Error('Book is not available');
  }
}
