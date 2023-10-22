import { Module } from '@nestjs/common';
import { DogsService } from './services/dogs.service';
import { TasksService } from './services/tasks.service';
import { DogsController } from './dogs.controller';

@Module({
  imports: [],
  controllers: [DogsController],
  providers: [DogsService, TasksService],
})
export class DogsModule {}
