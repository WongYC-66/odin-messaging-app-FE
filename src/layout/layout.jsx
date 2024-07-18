import { Outlet, useNavigate, Link } from "react-router-dom";

import logoIcon from '/logo.webp'

export default function Layout() {
    const navigate = useNavigate();
    let hasUsername = localStorage.getItem('username') !== null

    const logOutButtonClick = () => {
        localStorage.removeItem('username')
        navigate('/')
    }

    return (
        <div className="container-fluid d-flex flex-column bg-primary-subtle min-vh-100 p-0">
            {/*  navBar */}
            <div className="d-flex justify-content-around align-items-center w-100 bg-primary text-white">
                <Link to='/'>
                    <img src={logoIcon} alt="" style={{width:"75px"}} />
                </Link>
                {hasUsername && <button type="button" className="btn btn-secondary btn-sm" onClick={logOutButtonClick}>Log out</button>}
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