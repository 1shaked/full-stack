import { Route, Routes } from "react-router-dom";
import {HomePage} from './HomePage/HomePage'
import { PostPage } from "./PostPage/PostPage";
import { AuthorPage } from "./AuthorPage/AuthorPage";
import { AuthorDetailsPage } from "./AuthorPage/AuthorDetailsPage/AuthorDetailsPage";
export function RouterComponent() {
    return <>
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/post' element={<PostPage />}></Route>
        <Route path='/author' element={<AuthorPage />}></Route>
        <Route path='/author/:id' element={<AuthorDetailsPage />}></Route>
    </Routes>
    </>
}