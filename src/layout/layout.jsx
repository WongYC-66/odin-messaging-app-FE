import { Outlet, useNavigate, Link } from "react-router-dom";
import { useState, createContext } from "react";

import logoIcon from '/logo.webp'

export const UserContext = createContext(null);

export default function Layout() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    const logOutButtonClick = () => {
        localStorage.removeItem('user')
        setUser(null)
        navigate('/sign-in')
    }

    return (
        <div className="container-fluid d-flex flex-column bg-primary-subtle min-vh-100 p-0">
            {/*  navBar */}
            <div className="d-flex justify-content-around align-items-center w-100 bg-primary text-white">
                <Link to='/'>
                    <img src={logoIcon} alt="" style={{ width: "75px" }} />
                </Link>
                {user && <span>{user.username}</span>}
                {user && <button type="button" className="btn btn-secondary btn-sm" onClick={logOutButtonClick}>Log out</button>}
            </div>

            {/* Main Window / Sign In / Sign Up */}
            <main className="flex-fill w-100 d-flex flex-column justify-content-center align-items-center p-5">
                <UserContext.Provider value={{user, setUser}}>
                    {/* rendering children component */}
                    <Outlet />
                </UserContext.Provider>
            </main>

            <footer className="text-center">
                <p>Designed and Created by YcWong66 @ 2024</p>
            </footer>
        </div>
    );
}