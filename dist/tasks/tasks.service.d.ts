import { CreateTaskDto } from "./dto/create-task-dto";
import { GetTasksFilterDto } from "./dto/get-task-filter.dto";
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { Taskstatus } from "./task-status.enum";
export declare class TasksService {
    private TaskRepository;
    constructor(TaskRepository: TaskRepository);
    getTasks(filterDTO: GetTasksFilterDto): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    deleteTask(id: number): Promise<void>;
    updateTaskStatus(id: number, status: Taskstatus): Promise<Task>;
}
