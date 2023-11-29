import {router} from '../trpc'
import { getAuthorsDetails } from './get_author_details';
import { getAuthors } from './get_authors';

export const AuthorRouter = router({
    list: getAuthors,
    details: getAuthorsDetails
})