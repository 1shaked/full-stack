import { signal } from "@preact/signals-react";
import { SignalTodoInterface } from "./interfaceExampleTodo";

export const todosSignal = signal<SignalTodoInterface[]>([
    { text: "Buy groceries" },
    { text: "Walk the dog" },
  ]);