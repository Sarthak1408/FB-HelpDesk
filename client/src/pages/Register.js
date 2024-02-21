import {Link} from "react-router-dom";
import {useState} from "react";

export const Register = () => {

    //States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rem, setRem] = useState(false);

    //Form Submit Handler
    function handleForm(e) {

        //Prevent Page From Refreshing
        e.preventDefault();

        //Create Form Data Object for Post Request
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);

        //Post Request


    }

    return (
        <>
            <div className="register center-grid bg-blue container">
                <div className="card">
                    <div className="head-sm">Create Account</div>
                    <form onSubmit={handleForm}>
                        <div className="input-field">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="e.g. Sarthak Mathur" onChange={(e) => {
                                setName(e.target.value)
                            }} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="e.g. sarthak@abc.com" onChange={(e) => {
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
                            <input type="checkbox" name="remember" id="remember" onChange={(e) => {
                                setRem(e.target.checked)
                            }}/>
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <button className="button-lg bg-blue text-white" type="submit">Sign Up</button>
                    </form>
                    <span>Already have an account? <Link to={"/login"}>Login</Link></span>
                </div>
            </div>
        </>
    )
}