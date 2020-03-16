import { PipeTransform, BadRequestException } from "@nestjs/common";
import { Taskstatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatues = [
        Taskstatus.OPEN,
        Taskstatus.IN_PROGRESS,
        Taskstatus.DONE,
    ];
    transform(value: any,) {
        value = value.toUpperCase()
        
        if(!this.isStatusValid(value)) {
            throw new BadRequestException(`value is invalid`);
        }

        return value;
    }

    private isStatusValid(status: any) {
      const idx = this.allowedStatues.indexOf(status);
      return idx !== -1;
    }
}