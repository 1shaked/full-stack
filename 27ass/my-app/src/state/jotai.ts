import { atom } from 'jotai'

interface TodoInter {
    title: string;
    isCompleted: boolean;

}
export const todosAtom = atom<TodoInter[]>([
    {
        title: 'sss',
        isCompleted: false,
    }
]);

export const todosLenAtom = atom(
    (get) => {
        const todos = get(todosAtom)
        return todos.length;
    }
)
// Create your atoms and derivatives
export const textAtom = atom('hello');
export const lenTextAtom = atom(
    (get) => {
        const text = get(textAtom)
        return text.length
    }
)
// const uppercaseAtom = atom(
//   (get) => get(textAtom).toUpperCase()
// )