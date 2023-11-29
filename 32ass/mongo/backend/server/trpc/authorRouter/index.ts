import {router} from '../trpc'
import { getAuthors } from './get_authors';

export const AuthorRouter = router({
    list: getAuthors
})