// atoms.ts
import { atom } from 'jotai';

export const arrAtom = atom<string[]>(['buy', 'air pods', 'You']);

export const sumLetters = atom((get) => {
    return get(arrAtom).reduce((accumulator, currentValue) => {
        return accumulator + currentValue.length
    }, 0);
})
