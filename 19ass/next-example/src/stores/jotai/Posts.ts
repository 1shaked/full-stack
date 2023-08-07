// atoms.ts
import { PostsInterface } from '@/types/post';
import { atom } from 'jotai';

export const arrAtom = atom<PostsInterface[]>([{ user_id: 0, id: 0, title: '', body: '' }]);
export const sumLetters = atom((get) => {
    return get(arrAtom).reduce((accumulator, currentValue) => {
        return accumulator + currentValue.title.length
    }, 0);
})
