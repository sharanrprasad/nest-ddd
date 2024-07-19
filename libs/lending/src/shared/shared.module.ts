import { Module } from '@nestjs/common';
import { NestCqrsEvents } from 'libs/lending/src/shared/nest.cqrs.events';

@Module({
  providers: [NestCqrsEvents],
  exports: [NestCqrsEvents],
})
export class SharedModule {}
