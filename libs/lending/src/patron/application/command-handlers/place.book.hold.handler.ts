import { PlaceBookOnHoldCommand } from '../commands/place.book.hold.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { FindBookById } from 'libs/lending/src/book/models/find.book.by.id';
import { PatronRepository } from 'libs/lending/src/patron/infrastructure/patron.repository';

@CommandHandler(PlaceBookOnHoldCommand)
export class PlaceBookOnHoldCommandHandler
  implements ICommandHandler<PlaceBookOnHoldCommand>
{
  constructor(
    private findBookById: FindBookById,
    private patronRepository: PatronRepository,
  ) {}
  async execute(command: PlaceBookOnHoldCommand): Promise<any> {
    const book = await this.findBookById.findAvailableBookById(command.bookId);
    if (!book) {
      throw new Error(`Cannot find book with id ${command.bookId}`);
    }
    const patron = await this.patronRepository.findPatronById(command.patronId);
    if (!patron) {
      throw new Error(`Cannot find patron with id ${command.patronId}`);
    }
    const result = patron.placeOnHold(book, command.numberOfDays);
    console.log('patron domain events', result);
    return await this.patronRepository.handleEvents(result);
  }
}
