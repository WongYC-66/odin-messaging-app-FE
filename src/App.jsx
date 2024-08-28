import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import API_URL from "./layout/API_URL.jsx"
import Tab from './pages/Tab.jsx'
import WindowSkel from './pages/WindowSkel.jsx'
import WindowChat from './pages/WindowChat.jsx'
import WindowProfile from './pages/WindowProfile.jsx'
import WindowProfileEdit from './pages/WindowProfileEdit.jsx'
import { UserContext } from './layout/layout.jsx'


export async function loader() {
  console.log("running App loader")
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)
  if (!user)
    redirect('/sign-in')

  const myHeaders = new Headers();
  const token = user.token

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  console.log(myHeaders)

  const fetchAllChat = async () => {
    const response = await fetch(`${API_URL}/chats/`, {
      method: "GET",
      headers: myHeaders,
    })

    const data = await response.json()
    if (data && data.allChats)
      return data.allChats

    console.error('fetch chats failed ...')
    return []
  }

  const fetchAllProfile = async () => {
    const response = await fetch(`${API_URL}/users/profile/`, {
      method: "GET",
      headers: myHeaders,
    })

    
    const data = await response.json()
    if (data && data.allUsers)
      return data.allUsers

    console.error('fetch profiles failed ...')
    return []
  }

  const [allChat, allProfile] = await Promise.all([fetchAllChat(), fetchAllProfile()])
  return { allChat, allProfile }
}

function App() {

  const { setUser } = useContext(UserContext)
  const { allChat, allProfile } = useLoaderData()

  console.log(allChat, allProfile)

  const [userSelection, setUserSelection] = useState({
    type: null,
    id: null,
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user)
  }, [])

  return (
    <div className="flex-fill h-100 w-100 d-flex justify-content-center">
      {/* Left Window */}
      <Tab
        allChat={allChat}
        allProfile={allProfile}
        userSelection={userSelection}
        setUserSelection={setUserSelection}
      />
      {/* Right Window */}
      {userSelection.type === null && <WindowSkel />}
      {userSelection.type === "chat" && <WindowChat />}
      {userSelection.type === "profile" && <WindowProfile setUserSelection={setUserSelection} />}
      {userSelection.type === "profileEdit" && <WindowProfileEdit setUserSelection={setUserSelection} />}
    </div>
  )
}

export default App
