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
])