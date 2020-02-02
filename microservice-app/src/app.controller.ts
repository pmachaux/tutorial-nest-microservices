import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor() {}
  @MessagePattern({ cmd: 'hello' })
  async handleMessagePrinted(data: Record<string, unknown>) {
    return 'Hello from TCP Microservice';
  }
}
