import { Task } from "./task.entity";
import { Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task-dto";
import { GetTasksFilterDto } from "./dto/get-task-filter.dto";
export declare class TaskRepository extends Repository<Task> {
    getTasks(filterDTO: GetTasksFilterDto): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
