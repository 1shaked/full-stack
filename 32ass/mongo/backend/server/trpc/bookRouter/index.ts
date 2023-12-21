import {router} from '../trpc'
import { bookCreate } from './book_create'
import { bookList } from './book_list'
import { bookDetails } from './book_details'
import { bookEdit } from './book_edit'

export const BookRouter = router({//
    bookDetails: bookDetails,
    booksList: bookList,
    bookCreate: bookCreate,
    bookEdit: bookEdit,
})