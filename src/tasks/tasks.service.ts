import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task-dto";
import { GetTasksFilterDto } from "./dto/get-task-filter.dto";
import { TaskRepository } from './task.repository';
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from './task.entity';
import { Taskstatus } from "./task-status.enum";
@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TaskRepository)
    private TaskRepository: TaskRepository,) {}



    async getTasks(filterDTO: GetTasksFilterDto): Promise<Task[]> {
      return this.TaskRepository.getTasks(filterDTO);
    }



  async getTaskById(id: number):Promise<Task> {
    const found = await this.TaskRepository.findOne(id);

    if(!found) {
      throw new NotFoundException();
    } 
    return found;

  }

   async createTask(createTaskDto: CreateTaskDto ) {
     return this.TaskRepository.createTask(createTaskDto);
    }

    async deleteTask(id: number):Promise<void>{
    const result = await this.TaskRepository.delete(id);

    if(result.affected === 0) {
     throw new  NotFoundException();
    } else {
      console.log('deleteds')
    }
  }



  async updateTaskStatus(id: number,  status: Taskstatus): Promise<Task> {
  const task =  await this.getTaskById(id);
  task.status = status;
   await task.save;
   return task
  }
}
