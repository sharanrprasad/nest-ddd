import { DomainEventBus } from '../shared/domain.event.bus';
import { Injectable } from '@nestjs/common';
import { DomainEvent } from '../shared/domain.event';
import { EventBus } from '@nestjs/cqrs';

@Injectable()
export class NestCqrsEvents implements DomainEventBus {
  constructor(private eventBus: EventBus) {}
  publish(event: DomainEvent) {
    this.eventBus.publish(event);
  }
}
