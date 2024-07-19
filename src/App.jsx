import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import Tab from './pages/Tab.jsx'
import WindowChat from './pages/WindowChat.jsx'
import { UserContext } from './layout/layout.jsx'

export async function loader() {
  return null
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return redirect('sign-in')
  // window.location.reload()
  return user
}

function App() {

  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('../sign-in')
    setUser(user)
  }, [])

  return (
    <div className="flex-fill h-100 w-100 d-flex justify-content-center">
        <Tab />
        <WindowChat />
    </div>
  )
}

export default App
