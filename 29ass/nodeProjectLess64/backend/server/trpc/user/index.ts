import {router} from '../trpc'
import { getUser } from './getUser'

export const UserRouterTrpc = router({
    get: getUser
})