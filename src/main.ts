import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger3 } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:
      process.env.NODE_ENV === 'production'
        ? ['error', 'warn', 'log']
        : ['error', 'warn', 'log', 'verbose', 'debug'],
  });
  app.useLogger(app.get(MyLogger3));
  await app.listen(3000);
}
bootstrap();
