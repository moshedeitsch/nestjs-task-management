import { TasksService } from './tasks.service';
import { Task } from './task.model';
export declare class TaskController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Task[];
    cretaeTask(title: string, description: string): Task;
}
