import { createHashRouter } from "react-router-dom";

import Layout from './layout/layout.jsx'
import App from './App.jsx'
import SignUp from './pages/SignUp.jsx'
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
                index: true,
                element: <App />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            },
        ]
    },

]);

export default myRouter
