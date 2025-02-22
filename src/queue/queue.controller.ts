import { Body, Controller, Post } from '@nestjs/common';
import { QueueService } from './queue.service';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post('create')
  createQueue(@Body() payload: { queueName: string }) {
    return this.queueService.createQueue(payload.queueName);
  }
}
