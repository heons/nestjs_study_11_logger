import { Injectable, Logger } from '@nestjs/common';
import { MyLogger } from './MyLogger';

@Injectable()
export class AppService {
  // private readonly logger: Logger = new Logger(AppService.name);
  private readonly logger: MyLogger = new MyLogger();

  getHello(): string {
    this.logger.error('level: error');
    this.logger.warn('level: warn');
    this.logger.log('level: log');
    this.logger.verbose('level: verbose');
    this.logger.debug('level: debug');

    return 'Hello World!';
  }
}
