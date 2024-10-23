import { Module } from '@nestjs/common';
import { PatronController } from './api/patron.controller';
import { PatronService } from './application/patron.service';
import { SharedModule } from '../shared/shared.module';
import { LendingFacade } from '../patron/application/lending.facade';
import { PlaceBookOnHoldCommandHandler } from '../patron/application/command-handlers/place.book.hold.handler';
import { PatronRepository } from '../patron/infrastructure/patron.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { BookModule } from '../book/book.module';

@Module({
  controllers: [PatronController],
  providers: [
    PatronRepository,
    PlaceBookOnHoldCommandHandler,
    PatronService,
    LendingFacade,
  ],
  imports: [SharedModule, CqrsModule, BookModule],
})
export class PatronModule {}
