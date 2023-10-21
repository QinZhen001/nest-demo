import { Module } from '@nestjs/common';
import { DogService } from './dogs.service';
import { DogsController } from './dogs.controller';

@Module({
  controllers: [DogsController],
  providers: [DogService],
})
export class DogsModule {}
