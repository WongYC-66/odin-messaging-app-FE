import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import Tab from './pages/Tab.jsx'
import WindowChat from './pages/WindowChat.jsx'
import { UserContext } from './layout/layout.jsx'

export async function loader() {
  const allChat = [
    { 
      _id : "11111",
      room_name : "John Doe",
      last_msg : "Hi, how are you"
    },
    { 
      _id : "2222",
      room_name : "Group Chat",
      last_msg : "Room 2 broadcasting"
    },
    { 
      _id : "3333",
      room_name : "Alisa Flora",
      last_msg : "photo"
    },
  ]

  const allProfile = [
    {
      firstName: "John",
      lastName: "Doe",
      _id : '12341234',
    },
    {
      firstName: "Amy",
      lastName: "Baba",
      _id : '1717171717',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id : '35353535',
    },
  ]

  return {allChat, allProfile}
}

function App() {

  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)

  const { allChat, allProfile } = useLoaderData()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('../sign-in')
    setUser(user)
  }, [])

  return (
    <div className="flex-fill h-100 w-100 d-flex justify-content-center">
        <Tab allChat={allChat} allProfile={allProfile}/>
        <WindowChat />
    </div>
  )
}

export default App
