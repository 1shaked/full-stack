import * as trpcExpress from '@trpc/server/adapters/express';


// created for each request
export const createContext = ({
    req,
    res,
  }: trpcExpress.CreateExpressContextOptions) => ({ req, res }); // no context
export type Context = Awaited<ReturnType<typeof createContext>>;
