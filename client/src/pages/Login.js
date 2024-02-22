import {Link, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {getCookie, setCookie} from "../utils/CookieMaster";

export const Login = () => {

    //Navigator
    const nav = useNavigate();

    //refs
    const err = useRef(null);

    //States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rem, setRem] = useState(false);

    //Form Submit Handler
    function handleForm(e) {

        //Prevent Page From Refreshing
        e.preventDefault();

        //Post Request
        axios.post("http://localhost:5000/log-in", {
            email: email,
            password: password
        })
            .then((res) => {
                if (res.data === "success") {
                    if(rem) {
                        setCookie("em", email, 7);
                    }
                    else {
                        setCookie("em", email, 1);
                    }
                    err.current.innerText = "Login Successful!";
                    setTimeout(() => {
                        nav("/dashboard");
                    }, 2000);
                } else if (res.data === "wrong-pass") {
                    err.current.classList.add("active");
                    err.current.innerText = "Wrong Password!";
                    setTimeout(() => {
                        err.current.classList.remove("active");
                    }, 5000)
                } else if (res.data === "no-acc") {
                    err.current.classList.add("active");
                    err.current.innerText = "Account not found!";
                    setTimeout(() => {
                        err.current.classList.remove("active");
                    }, 5000)
                }
            });
    }

    //Check login
    useEffect(() => {
        const em = getCookie("em");
        if (em) nav("/dashboard");
    }, [])


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
                            <input type="checkbox" name="remember" id="remember" onChange={(e)=>{setRem(e.target.checked)}}/>
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <button className="button-lg bg-blue text-white" type="submit">Login</button>
                    </form>
                    <span>New to FB HelpDesk? <Link to={"/register"}>Sign Up</Link></span>
                </div>
                <p className="log-err" ref={err}/>
            </div>
        </>
    )
}