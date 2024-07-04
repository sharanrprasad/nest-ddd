import { Module } from '@nestjs/common';
import { LendingModule } from '@repo/lending-module';

@Module({
  imports: [LendingModule],
})
export class AppModule {}
