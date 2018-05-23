import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from 'middleware/logger.middleware';
import { AnyExceptionFilter } from 'exception/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.useGlobalFilters(new AnyExceptionFilter());
  await app.listen(3000);
}
bootstrap();
