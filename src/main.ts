import { NestFactory } from '@nestjs/core';
import { RootModule } from './RootModule';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(process.env.PORT ?? 3344);
}
bootstrap();
