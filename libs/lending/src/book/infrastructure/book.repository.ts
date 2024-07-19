import { Injectable } from '@nestjs/common';
import { FindBookById } from 'libs/lending/src/book/models/find.book.by.id';
import {
  AvailableBook,
  Book,
  OnHoldBook,
} from 'libs/lending/src/book/domain/book';
import { BookFactory } from 'libs/lending/src/book/domain/book.factory';
import {
  BookState,
  BookType,
} from 'libs/lending/src/book/models/book.db.entity';

@Injectable()
export class BookRepository implements FindBookById {
  async findAvailableBookById(
    bookId: string,
  ): Promise<AvailableBook | undefined> {
    const book = BookFactory.toBookDomainModel({
      bookId: bookId,
      bookState: BookState.Available,
      bookType: BookType.Circulating,
      availableAtBranch: 'Otara',
    });
    if (book && book instanceof AvailableBook) {
      return book;
    }
    return;
  }

  async findBookById(
    bookId: string,
  ): Promise<AvailableBook | OnHoldBook | undefined> {
    return BookFactory.toBookDomainModel({
      bookId: bookId,
      bookState: BookState.Available,
      bookType: BookType.Circulating,
      availableAtBranch: 'Otara',
    });
  }

  async saveBook(book: Book): Promise<Book> {
    console.log('Saving book to DB...');
    return book;
  }
}
