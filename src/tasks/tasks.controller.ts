import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task-dto";
import { GetTasksFilterDto } from "./dto/get-task-filter.dto";
import { TaskStatusValidationPipe } from "./pieps/task-status-validation.pipe";
import { Task } from './task.entity';
import { Taskstatus } from "./task-status.enum";

@Controller("tasks")
export class TaskController {
  constructor(private tasksService: TasksService) {}


  @Get()
  getTasks(@Query(ValidationPipe) filterDTO: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksService.getTasks(filterDTO);
  }

  @Get("/:id")
  getTaskById(@Param("id", ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  cretaeTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete("/:id")
  deleteTask(@Param("id") id: number):Promise <void> {
   return this.tasksService.deleteTask(id);
  }


  @Patch("/:id/status")
  updateTaskStatus(
    @Param("id", ParseIntPipe) id: number,
    @Body("status", TaskStatusValidationPipe) stauts: Taskstatus
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, stauts);
  }
}
