import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { PlaceBookOnHoldCommand } from 'libs/lending/src/patron/application/commands/place.book.hold.command';

@Injectable()
export class LendingFacade {
  constructor(private commandBus: CommandBus) {}

  placeBookOnHold(placeOnHoldCommand: PlaceBookOnHoldCommand) {
    const result = this.commandBus.execute(placeOnHoldCommand);
    return result;
  }
}
