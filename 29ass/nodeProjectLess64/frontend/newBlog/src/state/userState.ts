import { atom } from "jotai";


interface UserDataInterface {
    email: string;
    password: string;
    id: number;
}

export const UserInfoAtom = atom<UserDataInterface | null >(null)