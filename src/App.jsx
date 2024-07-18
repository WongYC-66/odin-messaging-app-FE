import { redirect } from "react-router-dom";
import SignIn from './pages/SignIn.jsx'
// import SignUp from './pages/SignUp.jsx'

function App() {

  let hasUsername = localStorage.getItem('username') !== null

  return (
    <>
      {!hasUsername && <SignIn />}
    </>
  )
}

export default App
