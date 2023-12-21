
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../node/server/trpc/index';
 
export const trpc = createTRPCReact<AppRouter>();