import { router } from './trpc';
import {z} from 'zod'
import { UserRouter } from './user';
export const ZodUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),  
});

export type UserSchemaType = z.infer<typeof ZodUserSchema>;

export const appRouter = router({
  user: UserRouter
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;