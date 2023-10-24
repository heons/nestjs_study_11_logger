import { Injectable, Logger } from '@nestjs/common';
// import { MyLogger } from './MyLogger';
import { MyLogger2 } from './MyLogger2';

@Injectable()
export class AppService {
  // private readonly logger: Logger = new Logger(AppService.name);
  // private readonly logger: MyLogger = new MyLogger();
  private readonly logger: MyLogger2 = new MyLogger2();

  getHello(): string {
    this.logger.error('level: error');
    this.logger.warn('level: warn');
    this.logger.log('level: log');
    this.logger.verbose('level: verbose');
    this.logger.debug('level: debug');

    return 'Hello World!';
  }
}
