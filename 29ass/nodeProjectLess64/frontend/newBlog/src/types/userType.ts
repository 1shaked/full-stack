import {z} from 'zod'


export const UserTypeZod = z.object({
    email: z.string().email(),
    password: z.string(),
    id: z.number(),
});

export type UserType = z.infer<typeof UserTypeZod>;