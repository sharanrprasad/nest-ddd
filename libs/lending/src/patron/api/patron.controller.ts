import { Body, Controller, Param, Post, ParseUUIDPipe } from '@nestjs/common';
import { PatronService } from '../application/patron.service';
import { PlaceBookOnHoldDto } from '../models/patron.dto';

@Controller('profiles')
export class PatronController {
  constructor(private readonly patronService: PatronService) {}

  @Post(':patronId/hold')
  placeBookOnHold(
    @Param('patronId', ParseUUIDPipe) patronId: string,
    @Body() placeBookOnHold: PlaceBookOnHoldDto,
  ): string {
    return this.patronService.get(placeBookOnHold.bookId);
  }
}
