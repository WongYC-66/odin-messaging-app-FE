import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div>
            <h1>hi im layout </h1>
            {/* all the other elements */}
            <Outlet />
        </div>
    );
}