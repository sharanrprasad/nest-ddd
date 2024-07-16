import { BookDbEntity, BookState } from '../infrastructure/book.db.entity';
import { AvailableBook, OnHoldBook } from './book';

export class BookFactory {
  static toBookDomainModel(bookDbEntity: BookDbEntity) {
    if (bookDbEntity.bookId) {
      return bookDbEntity.bookState === BookState.Available
        ? BookFactory.toAvailableBookDomainModel(bookDbEntity)
        : BookFactory.toOnHoldBookDomainModel(bookDbEntity);
    }
    throw new Error('Book id not defined');
  }

  static toAvailableBookDomainModel(bookDbEntity: BookDbEntity): AvailableBook {
    if (bookDbEntity.availableAtBranch) {
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
