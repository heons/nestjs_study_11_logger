import { Module } from '@nestjs/common';
import { MyLogger3 } from './logger.service';

@Module({
  providers: [MyLogger3],
  exports: [MyLogger3],
})
export class LoggerModule {}
