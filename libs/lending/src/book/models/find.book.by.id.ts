import { AvailableBook } from '../domain/book';

export abstract class FindBookById {
  abstract findAvailableBookById(
    bookId: string,
  ): Promise<AvailableBook | undefined>;
}
