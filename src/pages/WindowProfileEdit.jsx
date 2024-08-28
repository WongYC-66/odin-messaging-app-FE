import { Form, Link, redirect, useLoaderData, useParams,useNavigate } from "react-router-dom";
import { loader as AppLoader } from "../App.jsx"
import API_URL from "../layout/API_URL.jsx"

export async function loader({ params }) {
    console.log('running window profile loader')
    const { profile_id } = params

    // for App 
    const { allChat, allProfile } = await AppLoader()
    // todo- API to fetch  with profile_id
    // const userProfile = await()
    const userEditProfile = {
        firstName: 'Mr Beast',
        lastName: 'Rock',
        username: 'mrbeast96',
        description: 'You know who i am, just kidding, edit me!',
        email: 'beastrocks996@gmail.com',
        profile_id
    }

    return { allChat, allProfile, userEditProfile }
}

export default function WindowProfileEdit(props) {

    const { userEditProfile } = useLoaderData()
    const navigate = useNavigate();


    const first = userEditProfile ? userEditProfile.firstName : ''
    const last = userEditProfile ? userEditProfile.lastName : ''

    const iconURL = `https://ui-avatars.com/api/?background=random&name=${first}+${last}`

    const self = JSON.parse(localStorage.getItem('user'))
    console.log({ self })

    const setUserSelection = props.setUserSelection

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log('submit1!')
        // get userId
        const user = localStorage.getItem('user')
        console.log({user})

        await fetch(`${API_URL}`)
        setUserSelection({
            type: 'profile',
            id: user._id,
        })
        navigate(`/profile/${user._id}`);
        // todo
        // fetch UPDATE req
    }

    console.log({ first, last })

    return (
        <div className="bg-light bg-gradient flex-shrink-1 p-3 w-50 rounded border border-1 d-flex flex-column">

            {/* Profile */}

            {userEditProfile &&
                < div className="flex-fill border border-1 d-flex flex-column p-3">
                    <form>
                        <div className="flex-fill">
                            <div className="d-flex align-items-center mt-5">
                                <img src={iconURL} className="mx-3 rounded-circle" width="100px" height="100px"></img>
                                <div className="d-flex flex-column">
                                    {/* firstName Input */}
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="" defaultValue={first} />
                                        <label htmlFor="firstName">First Name</label>
                                    </div>
                                    {/* lastName Input */}
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="" defaultValue={last} />
                                        <label htmlFor="lastName">Last Name</label>
                                    </div>
                                    <h6>{`@${userEditProfile.username}`}</h6>
                                </div>
                            </div>

                            <hr />
                            {/* Email Input */}
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" name="email" placeholder="" defaultValue={userEditProfile.email} />
                                <label htmlFor="email">Email</label>
                            </div>

                            <p className="fst-italic">Description : </p>
                            {/* Description Input */}
                            <div className="form-floating mb-3">
                                <textarea type="email" className="form-control" id="description" name="description" placeholder="" defaultValue={userEditProfile.description} style={{height: '125px'}}/>
                                <label htmlFor="email"> ... your's description ...</label>
                            </div>


                        </div>

                        {/* Buttons - Edit My Profile , Send Message */}
                        <div className="d-flex justify-content-evenly align-items-center p-3">
                            {/* <Link to={`/profile/${self.username}/edit`}> */}
                                <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Update</button>
                            {/* </Link> */}
                        </div>
                    </form>
                </div>
            }

            {!userEditProfile && <p>Loading data ... </p>}
        </div >
    );
}