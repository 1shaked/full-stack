import { prismaDB } from '../connection';
import { publicProcedure, router } from './trpc';
import {AuthorRouter} from './authorRouter'
import { BookRouter } from './bookRouter';
export const appRouter = router({
  author: AuthorRouter,
  book: BookRouter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;