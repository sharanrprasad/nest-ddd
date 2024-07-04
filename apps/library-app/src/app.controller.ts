import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { add } from '@repo/utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(add(2, 4));
    return this.appService.getHello();
  }
}
