import { AvailableBook } from 'libs/lending/src/book/domain/book';

export abstract class FindBookById {
  abstract findAvailableBookById(
    bookId: string,
  ): Promise<AvailableBook | undefined>;
}
