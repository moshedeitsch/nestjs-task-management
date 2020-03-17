import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([TaskRepository]),
    ],
    controllers: [TaskController],
    providers: [TasksService]
})
export class TasksModule {}
