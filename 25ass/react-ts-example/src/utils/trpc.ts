import type { AppRouter } from '../../../node-example/server/trpc';
import { createTRPCReact } from '@trpc/react-query';
export const trpc = createTRPCReact<AppRouter>();
