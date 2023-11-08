import { Route, Routes } from "react-router-dom"
import { HomePage } from "./home"
import { BlogPage } from "./blog/page"
export function CustomRouter() {
    return <div>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/blog" element={<BlogPage />}/>
        </Routes>
    </div>
} 