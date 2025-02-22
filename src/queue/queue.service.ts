import { Injectable } from '@nestjs/common';
import { QueueServiceClient } from '@azure/storage-queue';
@Injectable()
export class QueueService {
  private readonly queueServiceClient: QueueServiceClient;
  private readonly queueName = 'queue-control-tokens';
  constructor() {
    this.queueServiceClient = QueueServiceClient.fromConnectionString(
      process.env.AZURE_CONNECT_STRING as string,
    );
  }

  async createQueue(queueName: string): Promise<string> {
    console.log(`Creating queue: ${queueName}`);
    try {
      await this.queueServiceClient.createQueue(queueName);
      return 'Queue created successfully';
    } catch (err) {
      console.error('Error creating queue:', err);
      return 'Error creating queue:' + err;
    }
  }
  async addQueue(queueItem: any): Promise<void> {
    console.log(`Adding queue: ${queueItem}`);
    try {
      await this.queueServiceClient
        .getQueueClient(this.queueName)
        .sendMessage(JSON.stringify(queueItem));
    } catch (err) {
      console.error('Error adding queue:', err);
    }
  }
}
