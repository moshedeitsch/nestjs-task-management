import { BaseEntity } from "typeorm";
import { Taskstatus } from "./task-status.enum";
export declare class Task extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: Taskstatus;
}
