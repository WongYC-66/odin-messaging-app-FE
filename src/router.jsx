import { createHashRouter } from "react-router-dom";

import Layout from './layout/layout.jsx'
import App from './App.jsx'
import SignUp, { action as signUpAction } from './pages/SignUp.jsx'
import ErrorPage from './error/Error.jsx'

// const myRouter = createBrowserRouter([
const myRouter = createHashRouter([
    {
        // path: "/odin-messaging-app-FE/",
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,        // error page, preserving Root UI
                children: [
                    {
                        index: true,
                        element: <App />
                    },
                    {
                        path: 'sign-up',
                        element: <SignUp />,
                        action: signUpAction,
                    },
                ]
            }
        ]
    },

]);

export default myRouter
