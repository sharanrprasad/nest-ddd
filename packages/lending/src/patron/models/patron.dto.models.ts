import { IsNumber, IsUUID, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PlaceBookOnHoldDto {
  @ApiProperty()
  @IsUUID()
  readonly bookId: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  readonly numberOfDays: number;
}
