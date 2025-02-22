import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { MessageDto } from './dto/create-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  sendMessage(@Body() message: MessageDto[]) {
    return this.chatService.sendMessage(message);
  }
}
