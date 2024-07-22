import { Module } from '@nestjs/common';
import { PatronModule, BookModule } from 'libs/lending/src';

@Module({
  imports: [PatronModule, BookModule],
})
export class AppModule {}
