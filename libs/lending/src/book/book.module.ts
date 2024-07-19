import { Module } from '@nestjs/common';
import { BookHoldSuccessEventHandler } from 'libs/lending/src/book/application/event-handlers/book.hold.success.event.handler';
import { BookRepository } from 'libs/lending/src/book/infrastructure/book.repository';
import { SharedModule } from 'libs/lending/src/shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [BookHoldSuccessEventHandler, BookRepository],
})
export class BookModule {}
