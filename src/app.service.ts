import { Inject, Injectable, Logger } from '@nestjs/common';
// import { MyLogger } from './MyLogger';
// import { MyLogger2 } from './MyLogger2';
// import { MyLogger3 } from './logger/logger.service';
import { Logger as WinstonLogger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Injectable()
export class AppService {
  // private readonly logger: Logger = new Logger(AppService.name);
  // private readonly logger: MyLogger = new MyLogger();
  // private readonly logger: MyLogger2 = new MyLogger2();
  // constructor(private myLogger: MyLogger3) {}
  constructor(@Inject(WINSTON_MODULE_PROVIDER) private logger: WinstonLogger) {}

  getHello(): string {
    const mockDto = {
      name: 'Name',
      email: 'email@example.com',
      password: 'passw;ord',
    };
    this.logger.error('level: error', mockDto);
    this.logger.warn('level: warn', mockDto);
    this.logger.info('level: info', mockDto);
    this.logger.verbose('level: verbose', mockDto);
    this.logger.debug('level: debug', mockDto);

    return 'Hello World!';
  }
}
