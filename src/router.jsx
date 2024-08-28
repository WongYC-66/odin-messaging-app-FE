import { createHashRouter } from "react-router-dom";

import Layout from './layout/layout.jsx'
import App, { loader as AppLoader } from './App.jsx'
import { loader as WindowChatLoader } from './pages/WindowChat.jsx'
import { loader as WindowProfileLoader } from './pages/WindowProfile.jsx'
import { loader as WindowProfileEditLoader } from './pages/WindowProfileEdit.jsx'
import SignUp, { action as signUpAction } from './pages/SignUp.jsx'
import SignIn, { action as signInAction } from './pages/SignIn.jsx'
import ErrorPage from './error/Error.jsx'

// const myRouter = createBrowserRouter([
const myRouter = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,        // error page, preserving Root UI
                children: [
                    {
                        index: true,
                        element: <App />,
                        loader: AppLoader,
                    },
                    {
                        path: 'chat/:chat_id',
                        element: <App />,
                        loader: WindowChatLoader,
                    },
                    {
                        path: 'profile/:profile_id',
                        element: <App />,
                        loader: WindowProfileLoader,
                    },
                    {
                        path: 'profile/:username/edit',
                        element: <App />,
                        loader: WindowProfileEditLoader,
                    },
                    {
                        path: 'sign-up',
                        element: <SignUp />,
                        action: signUpAction,
                    },
                    {
                        path: 'sign-in',
                        element: <SignIn />,
                        action: signInAction,
                    },
                ]
            }
        ]
    },

]);

export default myRouter
