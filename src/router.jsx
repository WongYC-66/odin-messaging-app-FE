import { createBrowserRouter } from "react-router-dom";
import { createHashRouter } from "react-router-dom";

import ErrorPage from './error/Error.jsx'
import Layout from './layout/layout.jsx'

// const myRouter = createBrowserRouter([
const myRouter = createHashRouter([
    {
        // path: "/odin-messaging-app-FE/",
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "contacts",
                element: <div>hi im contact </div>,
            },
        ]
    },

]);

export default myRouter
