import greenCircleIcon from '/greenCircle.png'
import greyCircleIcon from '/greyCircle.png'

export default function UserListModal(props) {

    // Show a Green/Gray icon if user last login at ...
    const user = props.user
    if (!user)
        return <> </>

    const milliSeconds = 1000 * 60 * 30
    const logInWithin = (new Date() - new Date(user.lastLoginAt)) <= milliSeconds

    return (
        <>

            {logInWithin ?
                <img src={greenCircleIcon} width={"15px"} height={"15px"} alt=""></img>
                :
                <img src={greyCircleIcon} width={"15px"} height={"15px"} alt=""></img>
            }
        </>
    );
}