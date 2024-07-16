import { Module } from '@nestjs/common';
import { PatronController } from './api/patron.controller';
import { PatronService } from './application/patron.service';

@Module({
  controllers: [PatronController],
  providers: [PatronService],
  exports: [PatronService],
})
export class PatronModule {}
