import {router} from '../trpc'
import { createUser } from './createUser'
import { loginUser } from './loginUser'

export const UserRouterTrpc = router({
    login: loginUser,
    create: createUser
})