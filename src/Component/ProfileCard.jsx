import { Form, Link, redirect } from "react-router-dom";
import groupChatIcon from '/group-chat.png'

export default function ChatCard(props) {
    // https://ui-avatars.com/
    const profile = props.profile
    const first = profile.firstName
    const last = profile.lastName
    const iconURL = `https://ui-avatars.com/api/?background=random&name=${first}+${last}`

    const userSelection = props.userSelection
    const setUserSelection = props.setUserSelection
    const isActive = userSelection.type === 'profile' && userSelection.id === profile._id

    const cardOnClick = () => {
        setUserSelection({
            type: 'profile',
            id: profile._id,
        })
    }

    return (
        <Link to={`/profile/${profile._id}`} className={`list-group-item list-group-item-action p-1 m-0 d-flex align-items-center ${isActive ? 'active' : ''}`} onClick={cardOnClick}>
            <img src={iconURL} className="mx-3" width="50px" height="50px"></img>
            <h5 className="">{`${first} ${last}`}</h5>
        </Link>
    );
}