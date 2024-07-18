import { createBrowserRouter } from "react-router-dom";

import ErrorPage from './error/Error.jsx'
import Layout from './layout/layout.jsx'

const myRouter = createBrowserRouter([
    {
        path: "/odin-messaging-app-FE/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "contacts/:contactId",
                element: <div>hi im contact </div>,
            },
        ]
    },

]);

export default myRouter
