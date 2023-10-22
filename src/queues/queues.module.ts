import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { AudioModule } from './audio/audio.module';

// 测试队列相关
@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    AudioModule,
  ],
  controllers: [],
  providers: [],
})
export class QueuesModule {}
