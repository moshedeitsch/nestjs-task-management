import { Taskstatus } from '../task-status.enum'
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn([Taskstatus.DONE,Taskstatus.OPEN,Taskstatus.IN_PROGRESS])
    status: Taskstatus;
    @IsOptional()
    @IsNotEmpty()
    search: string
}