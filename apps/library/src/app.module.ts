import { Module } from '@nestjs/common';
import { PatronModule } from '@repo/lending';

@Module({
  imports: [PatronModule],
})
export class AppModule {}
