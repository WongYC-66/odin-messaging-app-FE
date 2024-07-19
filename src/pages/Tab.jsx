import { Form, Link, redirect } from "react-router-dom";

export default function Tab() {

    return (
        <div className="bg-primary bg-gradient flex-shrink-1 p-3 w-50 rounded border border-1" style={{'--bs-bg-opacity': 0.7}}>

            {/* NavBar of Tab Panel */}
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Chats</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">

                {/* Chats Tab Pane */}
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">


                </div>

                {/* Profile Tab Pane */}
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    
                    
                </div>
            </div>
        </div>
    );
}