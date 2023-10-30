import { Outlet } from "react-router-dom";

export function LayoutStory() {
    return <div>
        <h3>layout story2</h3>
        {/* the content will be displayed here */}
        <Outlet />
        <h1>layout story</h1>
    </div>
}