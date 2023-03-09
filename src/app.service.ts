import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)

  getHello(): string {
    this.logger.debug('Testing logger debug...........')
    return 'Hello World!'
  }
}
