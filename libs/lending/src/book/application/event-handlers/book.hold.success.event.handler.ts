import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { BookHoldSuccessEvent } from 'libs/lending/src/patron/domain/events/book.hold.success.event';
import { BookRepository } from 'libs/lending/src/book/infrastructure/book.repository';
import { AvailableBook } from 'libs/lending/src/book/domain/book';

@EventsHandler(BookHoldSuccessEvent)
export class BookHoldSuccessEventHandler
  implements IEventHandler<BookHoldSuccessEvent>
{
  constructor(public bookRepository: BookRepository) {
    super();
  }
  async handle(event: BookHoldSuccessEvent): Promise<void> {
    const book = await this.bookRepository.findBookById(event.bookId);

    if (book instanceof AvailableBook) {
      await this.bookRepository.saveBook(book);
      return;
    }
    //TODO - Raise another event here that cancels the hold from the patron.
  }
}
