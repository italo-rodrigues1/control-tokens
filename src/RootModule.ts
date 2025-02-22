import { Module } from '@nestjs/common';
import { CronModule } from './cron/cron.module';
import { QueueModule } from './queue/queue.module';
import { ChatModule } from './chat/chat.module';
import { TokenManagerModule } from './token-manager/token-manager.module';
import { OpenaiModule } from './openai/openai.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
    }),
    ChatModule,
    CronModule,
    QueueModule,
    TokenManagerModule,
    OpenaiModule,
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
