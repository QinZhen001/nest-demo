import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// just for test
const connection = {
  aaa: 'aaa',
};

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class CatsModule {}
