import { useState, useEffect } from "react";

import SignIn from './pages/SignIn.jsx'
import MainScreen from './pages/MainScreen.jsx'

function App() {

  const [hasUsername, setHasUsername] = useState(false)

  useEffect(() => {
    setHasUsername(localStorage.getItem('username') !== null)
  }, [])

  return (
    <>
      {/* this is App */}
      {!hasUsername && <SignIn />}
      {hasUsername && <MainScreen />}
    </>
  )
}

export default App
