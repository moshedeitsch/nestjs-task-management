import { Tasktatus } from '../task.model';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn([Tasktatus.DONE,Tasktatus.OPEN,Tasktatus.IN_PROGRESS])
    status: Tasktatus;
    @IsOptional()
    @IsNotEmpty()
    search: string
}