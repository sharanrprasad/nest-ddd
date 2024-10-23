import { Body, Controller, Param, Post, ParseUUIDPipe } from '@nestjs/common';
import { PlaceBookOnHoldDto } from './models/patron.dto';
import { LendingFacade } from '../application/lending.facade';
import { PlaceBookOnHoldCommand } from '../application/commands/place.book.hold.command';
import { LoggerService } from '@repo/shared';

@Controller('profiles')
export class PatronController {
  constructor(
    private readonly lendingFacade: LendingFacade,
    private readonly loggerService: LoggerService,
  ) {}

  @Post(':patronId/hold')
  async placeBookOnHold(
    @Param('patronId', ParseUUIDPipe) patronId: string,
    @Body() placeBookOnHold: PlaceBookOnHoldDto,
  ) {
    this.loggerService.log(`Recieved request for place on hold ${patronId}`);
    const result = await this.lendingFacade.placeBookOnHold(
      new PlaceBookOnHoldCommand(
        placeBookOnHold.bookId,
        patronId,
        placeBookOnHold.numberOfDays,
      ),
    );

    console.log(result);
    return result;
  }
}
