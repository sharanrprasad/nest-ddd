import { Module } from '@nestjs/common';
import { BookHoldSuccessEventHandler } from './application/event-handlers/book.hold.success.event.handler';
import { BookRepository } from './infrastructure/book.repository';
import { SharedModule } from '../shared/shared.module';
import { CqrsModule } from '@nestjs/cqrs';
import { FindBookById } from './models/find.book.by.id';

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
