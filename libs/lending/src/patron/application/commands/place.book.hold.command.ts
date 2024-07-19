import { ICommand } from '@nestjs/cqrs';

export class PlaceBookOnHoldCommand implements ICommand {
  constructor(
    public bookId: string,
    public patronId: string,
    public numberOfDays?: number,
  ) {}
}
