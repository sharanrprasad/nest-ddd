import { Module } from '@nestjs/common';
import { PatronController } from './api/patron.controller';
import { PatronService } from './application/patron.service';
import { SharedModule } from 'libs/lending/src/shared/shared.module';
import { LendingFacade } from 'libs/lending/src/patron/application/lending.facade';
import { PlaceBookOnHoldCommandHandler } from 'libs/lending/src/patron/application/command-handlers/place.book.hold.handler';
import { PatronRepository } from 'libs/lending/src/patron/infrastructure/patron.repository';

@Module({
  controllers: [PatronController],
  providers: [
    PlaceBookOnHoldCommandHandler,
    PatronRepository,
    PatronService,
    LendingFacade,
  ],
  imports: [SharedModule],
  exports: [PatronController],
})
export class PatronModule {}
