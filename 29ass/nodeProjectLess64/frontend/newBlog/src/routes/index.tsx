import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { HomePage } from "./home"
import { BlogPage } from "./blog/page"
import { BlogIdPage } from "./blog/_id"
import { AddBlog } from "./blog/add"
import { SignUp } from "./auth/signUp"
import { useEffect } from "react"
import { UserTypeZod } from "../types/userType"
import { useSetAtom } from "jotai"
import { UserInfoAtom } from "../state/userState"
import { USER_LOCAL_KEY } from "../utils/CONST"
import { LoginPage } from "./auth/login"
import { MemoExample } from "../components/memo"
export function CustomRouter() {
    const set_user_info = useSetAtom(UserInfoAtom)
    const navigate = useNavigate();
    const location = useLocation()
    // useEffect(() => {
    //     const user_str = localStorage.getItem(USER_LOCAL_KEY);
    //     if (user_str === null || user_str.length === 0 && location.pathname !== '/login') return navigate('/sign-up');
    //     const user_obj_zod = UserTypeZod.safeParse(JSON.parse(user_str)); 
    //     if (user_obj_zod.success) {
    //         set_user_info(user_obj_zod.data);
    //         if (location.pathname === '/sign-up' || location.pathname === '/login') {
    //             navigate('/blog');
    //         }
    //         return ;
    //     }
    //     localStorage.removeItem(USER_LOCAL_KEY);
    //     navigate('/sign-up');
    // } , []);
    return <div>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="memo" element={<MemoExample />}/>
            <Route path="/blog">
                <Route index element={<BlogPage />} />
                <Route path="add" element={<AddBlog />} />
                <Route path=":id" element={<BlogIdPage />} />
            </Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="login" element={<LoginPage />} />
        </Routes>
    </div>
} 