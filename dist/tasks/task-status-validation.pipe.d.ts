import { PipeTransform } from "@nestjs/common";
import { Tasktatus } from "./task.model";
export declare class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatues: Tasktatus[];
    transform(value: any): any;
    private isStatusValid;
}
