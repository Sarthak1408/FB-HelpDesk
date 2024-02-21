import {Link} from "react-router-dom";
import {useState} from "react";

export const Login = () => {

    //States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Form Submit Handler
    function handleForm(e) {

        //Prevent Page From Refreshing
        e.preventDefault();

        //Create Form Data Object for Post Request
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        //Post Request


    }


    return (
        <>
            <div className="login center-grid bg-blue container">
                <div className="card">
                    <span className="head-sm">Login to your account</span>
                    <form onSubmit={handleForm}>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={(e) => {
                                setEmail(e.target.value)
                            }} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={(e) => {
                                setPassword(e.target.value)
                            }} required/>
                        </div>
                        <div className="check-field">
                            <input type="checkbox" name="remember" id="remember"/>
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <button className="button-lg bg-blue text-white" type="submit">Login</button>
                    </form>
                    <span>New to FB HelpDesk? <Link to={"/register"}>Sign Up</Link></span>
                </div>
            </div>
        </>
    )
}