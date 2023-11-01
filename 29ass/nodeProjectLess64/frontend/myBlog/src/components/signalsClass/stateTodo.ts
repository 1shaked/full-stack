import { signal } from "@preact/signals-react";
import { TodoInterface } from "./todoTypeSignal";

export const todo = signal<TodoInterface[]>([
    { text: 'x'},
    { text: 'y'},
    { text: 'z'},
]);