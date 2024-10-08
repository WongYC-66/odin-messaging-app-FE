import { Link, useLoaderData, useNavigate } from "react-router-dom";

import { loader as AppLoader } from "../App.jsx"
import API_URL from "../layout/API_URL.jsx"

export default function WindowProfile(props) {
    const navigate = useNavigate();
    const { userProfile } = useLoaderData()

    const first = userProfile ? userProfile.firstName : ''
    const last = userProfile ? userProfile.lastName : ''

    const iconURL = `https://ui-avatars.com/api/?background=random&name=${first}+${last}`

    const self = JSON.parse(localStorage.getItem('user'))

    const setUserSelection = props.setUserSelection

    const editBtnOnClick = () => {
        setUserSelection({
            type: 'profileEdit'
        })
    }

    const HandleSendMsgBtnClick = async () => {

        const targetUserId = userProfile.id

        const self = JSON.parse(localStorage.getItem('user'));

        const myHeaders = new Headers();
        const token = self.token

        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        // get self userId first
        const responseId = await fetch(`${API_URL}/users/profile/${self.username}`, {
            method: "GET",
            headers: myHeaders,
        })
        const dataId = await responseId.json()
        if (dataId && dataId.queryUser){
            var selfUserId = dataId.queryUser.id
        } else {
            return console.error(dataId.error)
        }

        // POST a new chat room
        const response = await fetch(`${API_URL}/chats/`, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                userIds: [targetUserId, selfUserId],
                isGroupChat: false,
            })
        })
        
        // if no error, redirect to corresponding chat window
        const data = await response.json()
        if (data && data.chat || data.error == "Chat already existed") {
            setUserSelection({
                type: 'chat',
                id: data.chat.id,
            })
            return navigate(`/chat/${data.chat.id}`);
        }
        return console.error(data.error)
    }

    return (
        <div className="bg-light bg-gradient flex-shrink-1 p-3 w-50 rounded border border-1 d-flex flex-column">

            {/* Profile */}
            {userProfile &&
                < div className="flex-fill border border-1 d-flex flex-column p-3">
                    <div className="flex-fill">
                        <div className="d-flex align-items-center mt-5">
                            <img src={iconURL} className="mx-3 rounded-circle" width="100px" height="100px"></img>
                            <div className="d-flex flex-column">
                                <h5>{`${first} ${last}`}</h5>
                                <h6>{`@${userProfile.username}`}</h6>
                            </div>
                        </div>

                        <hr />
                        <p>Email : {userProfile.email}</p>
                        <p className="fst-italic">Description : </p>
                        <p>{userProfile.description}</p>


                    </div>

                    {/* Buttons - Edit My Profile , Send Message */}
                    <div className="d-flex justify-content-evenly align-items-center p-3">
                        <Link to={`/profile/${self.username}/edit`} onClick={editBtnOnClick}>
                            <button type="button" className="btn btn-danger">Edit My Profile</button>
                        </Link>
                        <button type="button" className="btn btn-primary" onClick={HandleSendMsgBtnClick}>Send a message</button>
                    </div>
                </div>
            }

            {!userProfile && <p>Loading data ... </p>}
        </div >
    );
}

export async function loader({ params }) {
    const { username } = params

    const fetchUserProfile = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        const myHeaders = new Headers();
        const token = user.token

        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);


        const response = await fetch(`${API_URL}/users/profile/${username}`, {
            method: "GET",
            headers: myHeaders,
        })

        const data = await response.json()
        if (data && data.queryUser)
            return data.queryUser

        console.error('fetch profile by username failed ...')
        return []
    }

    const [{ allChat, allProfile }, userProfile] = await Promise.all([AppLoader(), fetchUserProfile()])

    return { allChat, allProfile, userProfile }
}