import { Module } from '@nestjs/common';
import { BookHoldSuccessEventHandler } from 'libs/lending/src/book/application/event-handlers/book.hold.success.event.handler';
import { BookRepository } from 'libs/lending/src/book/infrastructure/book.repository';
import { SharedModule } from 'libs/lending/src/shared/shared.module';
import { CqrsModule } from '@nestjs/cqrs';
import { FindBookById } from 'libs/lending/src/book/models/find.book.by.id';

@Module({
  imports: [SharedModule, CqrsModule],
  providers: [
    BookHoldSuccessEventHandler,
    BookRepository,
    { provide: FindBookById, useExisting: BookRepository },
  ],
  exports: [BookRepository, FindBookById],
})
export class BookModule {}
