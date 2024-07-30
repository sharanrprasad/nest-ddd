import { Module } from '@nestjs/common';
import { PatronModule, BookModule } from 'libs/lending/src';
import { SharedModule } from '@repo/shared';

@Module({
  imports: [PatronModule, BookModule, SharedModule],
})
export class AppModule {}
