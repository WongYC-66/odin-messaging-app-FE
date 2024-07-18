import { Form, Link, redirect } from "react-router-dom";

export async function action({ request, params }) {
    const formData = await request.formData();
    const userInfo = Object.fromEntries(formData);
    console.log(userInfo)
    
    // To-do
    // const response = await createContact(userInfo); // hook to API
    const response = {
        msg: 'success',
        user: {
            username : userInfo.username
        }
    };
    
    if (response && response.msg == 'success') {
        localStorage.setItem('user', JSON.stringify(response.user))
        return redirect('/')
    } else {
        throw new Error("Login failed, please try again")
    }
}


export default function SignUp() {

    let hasUsername = localStorage.getItem('username') !== null
    console.log(hasUsername)
    if (hasUsername) {
        throw new Error("Oh, you have logged in , please sign out first")
    }

    return (
        <div className="">

            <h1 className="text-primary mb-3">Create new account </h1>
            <h2 className="text-info mb-5">Connect easily to your friends</h2>

            <Form method="POST">
                <div className="form-floating my-3">
                    <input type="text" className="form-control" id="firstName" name='firstName' placeholder="" required/>
                    <label htmlFor="firstName">First Name</label>
                </div>

                <div className="form-floating my-3">
                    <input type="text" className="form-control" id="lastName" name='lastName' placeholder="" required/>
                    <label htmlFor="lastName">Last Name</label>
                </div>

                <div className="form-floating my-3">
                    <input type="text" className="form-control" id="username" name='username' placeholder="" required/>
                    <label htmlFor="username">username</label>
                </div>

                <div className="form-floating my-3">
                    <input type="password" className="form-control" id="password" name="password" placeholder="" required/>
                    <label htmlFor="password">Password</label>
                </div>

                <div className="form-floating my-3">
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="" required/>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                </div>

                <button type="submit" className="btn btn-primary my-3">Sign Up</button>

            </Form>

            <p className="mt-3">
                <span className="my-1"> Already have an account ? </span>
                <Link to={"/"} className="text-decoration-none">
                    Log in
                </Link>

            </p>
        </div>
    );
}