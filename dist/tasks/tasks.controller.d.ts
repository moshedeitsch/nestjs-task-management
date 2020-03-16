import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task-dto";
import { GetTasksFilterDto } from "./dto/get-task-filter.dto";
import { Task } from './task.entity';
import { Taskstatus } from "./task-status.enum";
export declare class TaskController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDTO: GetTasksFilterDto): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    cretaeTask(createTaskDto: CreateTaskDto): Promise<Task>;
    deleteTask(id: number): Promise<void>;
    updateTaskStatus(id: number, stauts: Taskstatus): Promise<Task>;
}
