import { router } from './trpc';
import {AuthorRouter} from './authorRouter'
import { BookRouter } from './bookRouter';
import { homeRouter } from './homeRouter';
import { personRouter } from './personRouter';
export const appRouter = router({
  author: AuthorRouter,
  book: BookRouter,
  home: homeRouter,
  person: personRouter
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;