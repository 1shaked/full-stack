import { Route, Routes, useNavigate } from "react-router-dom"
import { HomePage } from "./home"
import { BlogPage } from "./blog/page"
import { BlogIdPage } from "./blog/_id"
import { AddBlog } from "./blog/add"
import { SignUp } from "./auth/signUp"
import { useEffect } from "react"
import { UserTypeZod } from "../types/userType"
import { useSetAtom } from "jotai"
import { UserInfoAtom } from "../state/userState"
export function CustomRouter() {
    const set_user_info = useSetAtom(UserInfoAtom)
    const navigate = useNavigate()
    useEffect(() => {
        const user_str = localStorage.getItem('user_node');
        if (user_str === null || user_str.length === 0) return navigate('/sign-up');
        const user_obj_zod = UserTypeZod.safeParse(JSON.parse(user_str)); 
        if (user_obj_zod.success) {
            set_user_info(user_obj_zod.data);
            return ;
        }
        localStorage.setItem('user_node', '');
        navigate('/sign-up');
    } , [])
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