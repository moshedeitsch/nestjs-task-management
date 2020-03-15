export interface Task {
    id: string;
    title: string;
    description: string;
    status: Tasktatus;
}
export declare enum Tasktatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRES",
    DONE = "DONE"
}
