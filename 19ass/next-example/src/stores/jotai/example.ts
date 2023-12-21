// atoms.ts
import { Todo } from '@/types/todo';
import { atom } from 'jotai';


export const countAtom = atom<number>(0);

export const todoArrayAtom = atom<Todo[]>([
    {
        title: 'clean your room',
        isComplete: false,
    },
    {
        title: 'buy new phone',
        isComplete: true,
    }
]);

export const leftTodoAtom = atom<number>((get) => {
    // get is a function that let us get the value of an atom
    const todosArray = get(todoArrayAtom);
    /*
    let count = 0;
    for (let todo of todosArray) {
        if (!todo.isComplete) {
            count++;
        } else {
            count = count + 0
        }
    } 
    */
    // calculate the amount of todos left to do
    return todosArray.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.isComplete ? 0 : 1); 
    }, 0)
})