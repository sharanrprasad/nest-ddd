import { DomainEvent } from './domain.event';

export abstract class DomainEventBus {
  abstract publish(event: DomainEvent): void;
}
