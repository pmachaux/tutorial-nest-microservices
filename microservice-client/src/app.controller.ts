import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('HELLO_SERVICE') private readonly client: ClientProxy) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }
  @Get()
  getHello() {
    return this.client.send<any>(
      { cmd: 'hello' },
      {
        text: 'data for microservice to work on',
      },
    );
  }
}
