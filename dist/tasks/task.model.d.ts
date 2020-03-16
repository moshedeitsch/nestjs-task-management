export interface Task {
    id: string;
    title: string;
    description: string;
    status: Taskstatus;
}
export declare enum Taskstatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRES",
    DONE = "DONE"
}
