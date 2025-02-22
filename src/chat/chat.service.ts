import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {
  // constructor(private readonly queueService: any){}
  sendMessage(createChatDto: CreateChatDto) {
    return 'This action adds a new chat';
  }
}
