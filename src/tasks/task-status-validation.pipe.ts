import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { Tasktatus } from "./task.model";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatues = [
        Tasktatus.OPEN,
        Tasktatus.IN_PROGRESS,
        Tasktatus.DONE,
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