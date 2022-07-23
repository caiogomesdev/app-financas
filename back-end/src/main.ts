import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './config/data-source';
import 'dotenv/config';

async function bootstrap() {
  await AppDataSource.initialize().then(() =>
    console.log('connectado ao banco'),
  );
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
