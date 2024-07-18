import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div className="container-fluid d-flex flex-column bg-primary-subtle vh-100 p-0">
            {/*  navBar */}
            <div className="d-flex w-100 bg-primary text-white">
                <h1 className="p-1 ms-5">MessageMe</h1>
            </div>

            <main className="flex-fill w-100 d-flex flex-column justify-content-center align-items-center p-5">
                {/* rendering children compo*/}
                <Outlet />
            </main>

            <footer className="text-center">
                <p>Designed and Created by YcWong66 @ 2024</p>
            </footer>
        </div>
    );
}