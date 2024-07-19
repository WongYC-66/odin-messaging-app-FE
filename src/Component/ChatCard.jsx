import { Form, Link, redirect } from "react-router-dom";
import groupChatIcon from '/group-chat.png'

export default function ChatCard(props) {
    // https://ui-avatars.com/
    const chat = props.chat
    const isGroupChat = chat.room_name === "Group Chat"
    const [first, last] = chat.room_name.split(' ')
    const iconURL = `https://ui-avatars.com/api/?background=random&name=${first}+${last}`

    const userSelection = props.userSelection
    const setUserSelection = props.setUserSelection
    const isActive = userSelection.type === 'chat' && userSelection.id === chat._id

    const cardOnClick = () => {
        setUserSelection({
            type: 'chat',
            id: chat._id,
        })
    }

    return (
        <Link to={`/chat/${chat._id}`} className={`list-group-item list-group-item-action p-1 m-0 d-flex align-items-center ${isActive ? 'active' : ''}`} onClick={cardOnClick}>
            <img src={isGroupChat ? groupChatIcon : iconURL} className="mx-3" width="50px" height="50px"></img>
            <div>
                <h5 className="">{chat.room_name}</h5>
                <p className="">{chat.last_msg}</p>
            </div>
        </Link>
    );
}