import { IToDoItem } from "./todo-item";

export const TASKS: IToDoItem[] = [
    {
        name: "Create first Angular project",
        date: new Date(2022, 11, 3),
        completed: true
    },
    {
        name: "Create new component",
        date: new Date(2022, 11, 4),
        completed: false
    },
    {
        name: "Render task list",
        date: new Date(2022, 12, 9),
        completed: false
    },
    {
        name: "Use *ngFor structural directive",
        date: new Date(2022, 5, 20),
        completed: false
    },
    {
        name: "Add an event to an element",
        date: new Date(2022, 5, 20),
        completed: false
    }
];