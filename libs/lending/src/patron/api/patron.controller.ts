import { Body, Controller, Param, Post, ParseUUIDPipe } from '@nestjs/common';
import { PlaceBookOnHoldDto } from './models/patron.dto';
import { LendingFacade } from '../application/lending.facade';
import { PlaceBookOnHoldCommand } from '../application/commands/place.book.hold.command';

@Controller('profiles')
export class PatronController {
  constructor(private readonly lendingFacade: LendingFacade) {}

  @Post(':patronId/hold')
  placeBookOnHold(
    @Param('patronId', ParseUUIDPipe) patronId: string,
    @Body() placeBookOnHold: PlaceBookOnHoldDto,
  ) {
    return this.lendingFacade.placeBookOnHold(
      new PlaceBookOnHoldCommand(
        placeBookOnHold.bookId,
        patronId,
        placeBookOnHold.numberOfDays,
      ),
    );
  }
}
