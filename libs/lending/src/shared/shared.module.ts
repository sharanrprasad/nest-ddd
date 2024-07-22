import { Module } from '@nestjs/common';
import { NestCqrsEvents } from 'libs/lending/src/shared/nest.cqrs.events';
import { CqrsModule } from '@nestjs/cqrs';
import { DomainEventBus } from 'libs/lending/src/shared/domain.event.bus';

@Module({
  imports: [CqrsModule],
  providers: [
    NestCqrsEvents,
    { provide: DomainEventBus, useExisting: NestCqrsEvents },
  ],
  exports: [NestCqrsEvents, DomainEventBus],
})
export class SharedModule {}
