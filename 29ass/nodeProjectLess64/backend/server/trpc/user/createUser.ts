import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prisma } from "../../connection";
import * as bcrypt from 'bcrypt';


//////////////////////////////
const saltRounds = 10;

async function hashPassword(password: string): Promise<string> {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password: ' + error);
    }
}

async function checkPassword(password: string, hashedPassword: string): Promise<boolean> {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        throw new Error('Error checking password: ' + error);
    }
}
//////////////////////////////

export const createUser = publicProcedure.input(z.object({
    email: z.string(),
    password: z.string()
})).mutation(async (opts) => {
    const user = await prisma.user.create({
        data: opts.input
    });

    return user;
})