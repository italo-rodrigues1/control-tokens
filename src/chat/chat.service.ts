import { Injectable } from '@nestjs/common';
import { MessageDto } from './dto/create-chat.dto';
import { QueueService } from 'src/queue/queue.service';

@Injectable()
export class ChatService {
  constructor(private readonly queueService: QueueService) {}
  async sendMessage(message: MessageDto[]) {
    console.log('Received message:', message);
    await this.queueService.addQueue(message);

    return 'Message sent to queue';
  }
}
