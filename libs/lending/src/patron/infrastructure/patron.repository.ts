import { Injectable } from '@nestjs/common';
import { Patron } from 'libs/lending/src/patron/domain/patron';
import { PatronFactory } from 'libs/lending/src/patron/domain/patron.factory';
import { PatronType } from 'libs/lending/src/patron/infrastructure/models/patron.db.entity';
import { PatronEvent } from 'libs/lending/src/patron/domain/events/patron.event';
import { BookHoldSuccessEvent } from 'libs/lending/src/patron/domain/events/book.hold.success.event';
import { DomainEventBus } from 'libs/lending/src/shared/domain.event.bus';

@Injectable()
export class PatronRepository {
  constructor(public domainEventBus: DomainEventBus) {}

  async findPatronById(patronId: string): Promise<Patron | undefined> {
    return PatronFactory.toDomainModel(patronId, PatronType.Regular, []);
  }

  async handleEvents(event: PatronEvent) {
    if (event instanceof BookHoldSuccessEvent) {
      return this.handleBookHoldSuccessEvent(event);
    }
    throw new Error('Not recognised event');
  }

  async handleBookHoldSuccessEvent(bookHoldSuccessEvent: BookHoldSuccessEvent) {
    // Event publish doesn't return any value.
    // More info on domain events here - https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation
    return this.domainEventBus.publish(bookHoldSuccessEvent);
  }
}
