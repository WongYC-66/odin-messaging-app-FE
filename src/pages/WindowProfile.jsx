import { Form, Link, redirect, useLoaderData, useParams } from "react-router-dom";
import { loader as AppLoader } from "../App.jsx"

export async function loader({ params }) {
    console.log('running window profile loader')
    const { profile_id } = params

    // for App 
    const { allChat, allProfile } = await AppLoader()
    // todo- API to fetch  with profile_id
    // const userProfile = await()
    const userProfile = {
        firstName: 'Emilia',
        lastName: 'Clark',
        username: 'emiliaC1356',
        description: 'im a Emilia, nice to meet you',
        email: 'emilia13145@gmail.com'
    }

    return { allChat, allProfile, userProfile}
}

export default function WindowProfile() {

    const { userProfile } = useLoaderData()

    const first = userProfile ? userProfile.firstName : ''
    const last = userProfile ? userProfile.lastName : ''

    const iconURL = `https://ui-avatars.com/api/?background=random&name=${first}+${last}`

    const self = JSON.parse(localStorage.getItem('user'))
    console.log({ self })


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
                        <Link to={`/profile/${self.username}/edit`}>
                            <button type="button" className="btn btn-danger">Edit My Profile</button>
                        </Link>
                        <button type="button" className="btn btn-primary">Send a message</button>
                    </div>
                </div>
            }

            {!userProfile && <p>Loading data ... </p>}
        </div >
    );
}