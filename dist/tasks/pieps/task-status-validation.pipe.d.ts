import { PipeTransform } from "@nestjs/common";
import { Taskstatus } from "../task-status.enum";
export declare class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatues: Taskstatus[];
    transform(value: any): any;
    private isStatusValid;
}
