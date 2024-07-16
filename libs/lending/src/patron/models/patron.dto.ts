import { IsNumber, IsUUID, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PlaceBookOnHoldDto {
  @IsUUID()
  readonly bookId: string;

  @IsNumber()
  @Min(1)
  readonly numberOfDays: number;
}
