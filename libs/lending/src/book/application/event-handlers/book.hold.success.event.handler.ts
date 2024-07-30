import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { BookHoldSuccessEvent } from '../../../patron/domain/events/book.hold.success.event';
import { BookRepository } from '../../../book/infrastructure/book.repository';
import { AvailableBook, Book } from '../../../book/domain/book';

@EventsHandler(BookHoldSuccessEvent)
export class BookHoldSuccessEventHandler
  implements IEventHandler<BookHoldSuccessEvent>
{
  constructor(private bookRepository: BookRepository) {}
  async handle(event: BookHoldSuccessEvent): Promise<Book | undefined> {
    const book = await this.bookRepository.findBookById(event.bookId);

    if (book instanceof AvailableBook) {
      return await this.bookRepository.saveBook(book);
    }
    //TODO - Raise another event here that cancels the hold from the patron.
  }
}
