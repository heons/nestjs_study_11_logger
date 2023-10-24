import { ConsoleLogger } from '@nestjs/common';

export class MyLogger2 extends ConsoleLogger {
  error(message: any, stack?: string, context?: string): void {
    super.error.apply(this, arguments);
    this.doSomething();
  }

  private doSomething() {
    console.log('doSomething');
  }
}
