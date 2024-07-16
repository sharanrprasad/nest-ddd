import { Module } from '@nestjs/common';
import { PatronModule } from 'libs/lending/src';

@Module({
  imports: [PatronModule],
})
export class AppModule {}
