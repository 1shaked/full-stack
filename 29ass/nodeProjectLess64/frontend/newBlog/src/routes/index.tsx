import { Route, Routes } from "react-router-dom"
export function CustomRouter() {
    return <div>
        <Routes>
            <Route path="/" element={<div>home</div>}/>
            <Route path="/about" element={<div>about</div>}/>
        </Routes>
    </div>
} 