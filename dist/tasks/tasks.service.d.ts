import { Task, Tasktatus } from "./task.model";
import { CreateTaskDto } from "./dto/create-task-dto";
import { GetTasksFilterDto } from "./dto/get-task-filter.dto";
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskWithFilters(filterDto: GetTasksFilterDto): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, status: Tasktatus): Task;
}
