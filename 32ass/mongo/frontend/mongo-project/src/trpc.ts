import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../backend/server/trpc/index';

// const BACKEND_URL = "http://localhost:3301/trpc";

export const trpc = createTRPCReact<AppRouter>();
