import { Form, Link, redirect } from "react-router-dom";
import groupChatIcon from '/group-chat.png'

export default function ChatCard({ profile }) {
    // https://ui-avatars.com/
    const first = profile.firstName
    const last = profile.lastName
    const iconURL = `https://ui-avatars.com/api/?background=random&name=${first}+${last}`

    return (
        <a href="#" className="list-group-item list-group-item-action p-1 m-0 d-flex align-items-center ">
            <img src={iconURL} className="mx-3" width="50px" height="50px"></img>
            <h5 className="">{`${first} ${last}`}</h5>
        </a>
    );
}