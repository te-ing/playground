import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneratorPractice } from './practice/Generator';

@Module({
  imports: [GeneratorPractice],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
