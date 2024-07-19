import { Form, Link, redirect } from "react-router-dom";

import ChatCard from "../Component/ChatCard";
import ProfileCard from "../Component/ProfileCard";

export default function Tab(props) {

    const allChat = props.allChat
    const allProfile = props.allProfile

    console.log({ allChat, allProfile })

    return (
        // tab panel
        <div className="bg-primary bg-gradient flex-shrink-1 p-3 w-50 rounded border border-1 d-flex flex-column" style={{ '--bs-bg-opacity': 0.7 }}>

            {/* NavBar of Tab Panel */}
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Chats</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                </li>
            </ul>
            <div className="tab-content flex-fill h-100 w-100 d-flex" id="myTabContent">

                {/* Chats Tab Pane */}
                <div className="tab-pane fade show active flex-fill bg-light rounded-bottom" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    <ul className="list-group w-100 p-3">
                        {allChat.map(chat => <ChatCard key={chat._id} chat={chat} />)}
                    </ul>

                </div>

                {/* Profile Tab Pane */}
                <div className="tab-pane fade flex-fill bg-light rounded-bottom" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    <ul className="list-group w-100 p-3">
                        {allProfile.map(profile => <ProfileCard key={profile._id} profile={profile} />)}
                    </ul>

                </div>
            </div>
        </div>
    );
}