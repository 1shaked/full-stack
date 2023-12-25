import {router} from '../trpc'
import { getUser } from './getUser'

export const UserRouter = router({
    get: getUser
})