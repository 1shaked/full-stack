import { atom } from "jotai";
import { UserType } from "../types/userType";

export const UserInfoAtom = atom<UserType | null >(null)