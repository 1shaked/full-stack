import {router} from '../trpc'
import { userCreate } from './create';
import { userDelete } from './delete';
import { userUpdate } from './update';
import { userList } from './list';
export const UserRouter = router({
    userList,
    userCreate,
    userDelete,
    userUpdate
});