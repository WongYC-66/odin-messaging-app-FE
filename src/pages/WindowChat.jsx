import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { loader as AppLoader } from "../App.jsx"

export default function WindowChat() {
    const { chatsInfo } = useLoaderData()

    const self = JSON.parse(localStorage.getItem('user'))
    console.log({ self })

    console.log(chatsInfo)
    return (
        <div className="bg-light bg-gradient flex-shrink-1 p-3 w-50 rounded border border-1 d-flex flex-column">
            {!chatsInfo && <p>Loading chats ... </p>}
            {chatsInfo &&
                < div className="flex-fill border border-1 d-flex flex-column p-3">
                    {/* Chat target / Group Name */}
                    <h4 className="text-center bg-primary py-1">{chatsInfo.room_name}</h4>

                    <div className="flex-grow-1 overflow-y-scroll" style={{maxHeight:"55vh"}}>
                        {chatsInfo.chats.map(({ user_id, firstName, lastName, text, timestamp }, i) => {
                            const iconURL = `https://ui-avatars.com/api/?background=random&name=${firstName}+${lastName}`
                            return (
                                <div className="d-flex">
                                    {/* other's icon */}
                                    {user_id != self._id &&
                                        <img src={iconURL} className="mx-3 rounded-circle" width="35px" height="35px"></img>
                                    }
                                    <div className="w-100">
                                        {/* other's name */}
                                        {user_id != self._id && <p className="m-0 p-0">{firstName + " " + lastName}</p>}
                                        {/* all text */}
                                        <p className={`m-0 p-0 pe-3 ${user_id == self._id && 'text-end'}`}>{text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* textarea input and send button */}
                    <div className="d-flex w-100 mt-5">
                        <textarea className="flex-fill" placeholder=" enter your message here ..." style={{ resize: 'none' }} ></textarea>
                        <button className="btn btn-primary ms-3" type="button">send</button>
                    </div>


                </div>
            }
        </div >
    );
}

export async function loader({ params }) {
    console.log('running window chat loader')
    const { chat_id } = params

    // for App 
    const { allChat, allProfile } = await AppLoader()
    // todo- API to fetch  with chat_id
    // const chats = await()

    const chatsInfo = {
        _id: '11111',
        room_name: "Group Chat",
        chats: [
            { user_id: '9527', firstName: 'Mr', lastName: "Beast", text: "Hi im mr beast", timestamp: "2014-05-10" },
            { user_id: '1111', firstName: 'Johnny', lastName: "Lassi", text: "Hi im johny", timestamp: "2014-05-11" },
            { user_id: '2222', firstName: 'Emilia', lastName: "Clark", text: "Hi im emilia", timestamp: "2014-05-12" },
            { user_id: '3333', firstName: 'Clerk', lastName: "Johnson", text: "Hi im clerk", timestamp: "2014-05-13" },
            { user_id: '2222', firstName: 'Emilia', lastName: "Clark", text: "Hi im emilia", timestamp: "2014-05-12" },
            { user_id: '3333', firstName: 'Clerk', lastName: "Johnson", text: "Hi im clerk", timestamp: "2014-05-13" },
            { user_id: '2222', firstName: 'Emilia', lastName: "Clark", text: "Hi im emilia", timestamp: "2014-05-12" },
            { user_id: '2222', firstName: 'Emilia', lastName: "Clark", text: "Hi im emilia", timestamp: "2014-05-12" },
            { user_id: '3333', firstName: 'Clerk', lastName: "Johnson", text: "Hi im clerk", timestamp: "2014-05-13" },
            { user_id: '3333', firstName: 'Clerk', lastName: "Johnson", text: "Hi im clerk", timestamp: "2014-05-13" },
            { user_id: '2222', firstName: 'Emilia', lastName: "Clark", text: "Hi im emilia", timestamp: "2014-05-12" },
            { user_id: '3333', firstName: 'Clerk', lastName: "Johnson", text: "Hi im clerk", timestamp: "2014-05-13" },
            { user_id: '9527', firstName: 'Mr', lastName: "Beast", text: "Mr Beast rocks", timestamp: "2014-05-14" },
        ]
    }

    return { allChat, allProfile, chatsInfo }
}