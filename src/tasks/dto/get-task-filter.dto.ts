import { Tasktatus } from '../task.model';

export class GetTasksFilterDto {
    status: Tasktatus;
    search: string
}