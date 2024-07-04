import { Controller, Get } from '@nestjs/common';
import { LendingService } from './lending.service';

@Controller()
export class LendingController {
  constructor(private readonly appService: LendingService) {}

  @Get()
  getHello(): string {
    return this.appService.get();
  }
}
