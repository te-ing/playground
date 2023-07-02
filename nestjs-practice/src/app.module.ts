import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneratorPractice } from './practice/Generator';
import { RedirectModule } from './redirect/redirect.module';

@Module({
  imports: [GeneratorPractice, RedirectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
