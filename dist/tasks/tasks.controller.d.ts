import { TasksService } from "./tasks.service";
import { Task } from "./task.model";
import { CreateTaskDto } from "./dto/create-task-dto";
export declare class TaskController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    cretaeTask(createTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
}
