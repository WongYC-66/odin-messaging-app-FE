import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import MainScreen from './pages/MainScreen.jsx'
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
    <>
      {/* {user && <MainScreen />} */}
      {/* im Apps */}
      im app
    </>
  )
}

export default App
