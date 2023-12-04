import { Route, Routes } from "react-router-dom";
import {HomePage} from './HomePage/HomePage'
import { PostPage } from "./PostPage/PostPage";
import { AuthorPage } from "./AuthorPage/AuthorPage";
import { AuthorDetailsPage } from "./AuthorPage/AuthorDetailsPage/AuthorDetailsPage";
import { BooksPage } from "./BooksPage/BooksPage";
import { BookDetailsPage } from "./BooksPage/BookDetailsPage/BookDetailsPage";
export function RouterComponent() {
    return <>
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/post' element={<PostPage />}></Route>
        <Route path='/author' element={<AuthorPage />}></Route>
        <Route path='/author/:id' element={<AuthorDetailsPage />}></Route>
        <Route path="/books" element={<BooksPage />}></Route>
        <Route path="/books/:id" element={<BookDetailsPage />}></Route>
    </Routes>
    </>
}