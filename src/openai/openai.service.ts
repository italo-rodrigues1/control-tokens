import { Injectable } from '@nestjs/common';
import ollama from 'ollama';

@Injectable()
export class OpenaiService {
  async sendCompletions(
    message: {
      role: string;
      content: string;
    }[],
  ) {
    const data = {
      model: 'deepseek-r1',
      messages: message,
    };

    try {
      const response = await ollama.chat(data);
      console.log(response);
    } catch (err) {
      console.error('Error:', err);
    }
  }
}
