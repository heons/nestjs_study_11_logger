import { Injectable, Logger } from '@nestjs/common';
import { MyLogger3 } from './logger/logger.service';
// import { MyLogger } from './MyLogger';
// import { MyLogger2 } from './MyLogger2';

@Injectable()
export class AppService {
  // private readonly logger: Logger = new Logger(AppService.name);
  // private readonly logger: MyLogger = new MyLogger();
  // private readonly logger: MyLogger2 = new MyLogger2();
  constructor(private myLogger: MyLogger3) {}

  getHello(): string {
    this.myLogger.error('level: error');
    this.myLogger.warn('level: warn');
    this.myLogger.log('level: log');
    this.myLogger.verbose('level: verbose');
    this.myLogger.debug('level: debug');

    return 'Hello World!';
  }
}
