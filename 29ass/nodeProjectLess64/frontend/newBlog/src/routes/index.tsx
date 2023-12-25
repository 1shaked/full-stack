import { Route, Routes } from "react-router-dom"
import { HomePage } from "./home"
import { BlogPage } from "./blog/page"
import { BlogIdPage } from "./blog/_id"
import { AddBlog } from "./blog/add"
import { SignUp } from "./auth/signUp"
export function CustomRouter() {
    return <div>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/blog">
                <Route index element={<BlogPage />} />
                <Route path="add" element={<AddBlog />} />
                <Route path=":id" element={<BlogIdPage />} />
            </Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
    </div>
} 