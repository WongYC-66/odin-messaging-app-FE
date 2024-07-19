import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Tab from './pages/Tab.jsx'
import WindowSkel from './pages/WindowSkel.jsx'
import WindowChat from './pages/WindowChat.jsx'
import WindowProfile from './pages/WindowProfile.jsx'
import { UserContext } from './layout/layout.jsx'

export async function loader() {
  console.log("running App loader")
  const allChat = [
    {
      _id: "11111",
      room_name: "John Doe",
      last_msg: "Hi, how are you"
    },
    {
      _id: "2222",
      room_name: "Group Chat",
      last_msg: "Room 2 broadcasting"
    },
    {
      _id: "3333",
      room_name: "Elisa Dlora",
      last_msg: "photo"
    },
    {
      _id: "3334",
      room_name: "Dlisa Alora",
      last_msg: "photo"
    },
    {
      _id: "3335",
      room_name: "Zlisa Elora",
      last_msg: "Yo!"
    },
    {
      _id: "3336",
      room_name: "Group Chat",
      last_msg: "Aloha"
    },
    {
      _id: "3337",
      room_name: "Group Chat",
      last_msg: "photo"
    }, {
      _id: "3338",
      room_name: "Cool Man",
      last_msg: "Hi are you ok?"
    },
  ]

  const allProfile = [
    {
      firstName: "John",
      lastName: "Doe",
      _id: '12341234',
    },
    {
      firstName: "Amy",
      lastName: "Baba",
      _id: '1717171717',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353531',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353532',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353533',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353534',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353535',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353536',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353537',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353538',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353539',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353540',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353541',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353542',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353543',
    },
    {
      firstName: "Zack",
      lastName: "Hershall",
      _id: '35353544',
    },
  ]

  return { allChat, allProfile }
}

function App() {

  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)

  const { allChat, allProfile } = useLoaderData()
  const [userSelection, setUserSelection] = useState({
    type: null,
    id: null,
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return navigate('../sign-in')
    setUser(user)
  }, [])

  return (
    <div className="flex-fill h-100 w-100 d-flex justify-content-center">
      <Tab
        allChat={allChat}
        allProfile={allProfile}
        userSelection={userSelection}
        setUserSelection={setUserSelection}
      />
      {userSelection.type === null && <WindowSkel />}
      {userSelection.type === "chat" && <WindowChat />}
      {userSelection.type === "profile" && <WindowProfile />}
    </div>
  )
}

export default App
