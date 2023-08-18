import { Module } from '@nestjs/common';
import { RedirectController } from './redirect.controller';

@Module({
  imports: [],
  controllers: [RedirectController],
  providers: [],
})
export class RedirectModule {}
