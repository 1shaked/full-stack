import {router} from '../trpc'
import { GetAuthors } from './get_authors';

export const AuthorRouter = router({
    list: GetAuthors
})