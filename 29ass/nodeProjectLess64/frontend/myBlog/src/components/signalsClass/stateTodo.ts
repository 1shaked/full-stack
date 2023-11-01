import { computed, signal } from "@preact/signals-react";
import { TodoInterface } from "./todoTypeSignal";

export const todo = signal<TodoInterface[]>([
    { text: 'x'},
    { text: 'y'},
    { text: 'z'},
]);

export const todoCountChar = computed(() => {
    let count = 0;
    for (const todoItem of todo.value) {
        count += todoItem.text.length
    }
    return count;
})