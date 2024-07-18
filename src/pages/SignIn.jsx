import { Form, Link, redirect } from "react-router-dom";

export async function action({ request }) {

    const formData = await request.formData();
    const userInfo = Object.fromEntries(formData);
    console.log(userInfo)

    // To-do
    // const response = await createContact(userInfo); // hook to API
    const response = {
        msg: 'success',
        user: JSON.stringify({
            username: userInfo.username
        })
    };

    if (response && response.msg == 'success') {
        localStorage.setItem('user', response.user)
        return redirect('/')
    } else {
        throw new Error("Login failed, please try again")
    }
}

export default function SignIn() {
    
    return (
        <div className="">
            <h1 className="text-primary">Hang out </h1>
            <h2 className="text-info">whenever,</h2>
            <h2 className="text-primary-emphasis mb-5">wherever</h2>

            <p className="text-primary-emphasis mb-3 w-50">MessageMe makes it easy to send a chat message to your friend or even a stranger! </p>

            <Form method="POST">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="username" name='username' placeholder="" required />
                    <label htmlFor="username">username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="password" name="password" placeholder="" required />
                    <label htmlFor="password">Password</label>
                </div>

                <button type="submit" className="btn btn-primary my-3">Log in</button>

            </Form>

            <p className="mt-3">
                <span className="my-1"> Doesn't have account ? </span>
                <Link to={"../sign-up"} className="text-decoration-none">
                    Sign Up here
                </Link>

            </p>
        </div>
    );
}