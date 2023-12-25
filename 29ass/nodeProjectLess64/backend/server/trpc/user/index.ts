import {router} from '../trpc'
import { createUser } from './createUser'
import { getUser } from './getUser'

export const UserRouterTrpc = router({
    get: getUser,
    create: createUser
})