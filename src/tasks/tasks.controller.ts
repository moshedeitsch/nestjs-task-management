import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task, Tasktatus } from "./task.model";
import { CreateTaskDto } from "./dto/create-task-dto";

@Controller("tasks")
export class TaskController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
  @Get("/:id")
  getTaskById(@Param("id") id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  cretaeTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete("/:id")
  deleteTask(@Param("id") id: string): void {
    this.tasksService.deleteTask(id);
  }
  @Patch("/:id/status")
  updateTakStatus(@Param("id") id: string, @Body("status") stauts: Tasktatus) {
      return this.tasksService.updateTakStatus(id,stauts);
  }
}
