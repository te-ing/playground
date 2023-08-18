import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'], // log 터미널에 뜨지 않도록 수정
  });
  await app.listen(3000);
}
bootstrap();
