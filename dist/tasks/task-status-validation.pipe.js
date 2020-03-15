"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const task_model_1 = require("./task.model");
class TaskStatusValidationPipe {
    constructor() {
        this.allowedStatues = [
            task_model_1.Tasktatus.OPEN,
            task_model_1.Tasktatus.IN_PROGRESS,
            task_model_1.Tasktatus.DONE,
        ];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`value is invalid`);
        }
        return value;
    }
    isStatusValid(status) {
        const idx = this.allowedStatues.indexOf(status);
        return idx !== -1;
    }
}
exports.TaskStatusValidationPipe = TaskStatusValidationPipe;
//# sourceMappingURL=task-status-validation.pipe.js.map