import {Link, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {getCookie} from "../utils/CookieMaster";

export const Register = () => {

    //Navigator
    const nav = useNavigate();

    //refs
    const err = useRef(null);

    //States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rem, setRem] = useState(false);

    //Form Submit Handler
    function handleForm(e) {

        //Prevent Page From Refreshing
        e.preventDefault();

        //Post Request
        axios.post("http://localhost:5000/sign-up", {
            name: name,
            email: email,
            password: password
        })
            .then((res) => {
                if(res.data === "success") {
                    err.current.classList.add("active");
                    err.current.innerText = "Sign up successful!";
                    setTimeout(()=>{
                        nav("/");
                    },2000)
                }
                else if (res.data === "error") {
                    err.current.classList.add("active");
                    err.current.innerText = "Something went wrong!";
                    setTimeout(()=>{
                        err.current.classList.remove("active");
                    },5000)
                }
                else if (res.data === "exists") {
                    err.current.classList.add("active");
                    err.current.innerText = "Account already exists";
                    setTimeout(()=>{
                        err.current.classList.remove("active");
                    },5000)
                }
            });
    }

    //Check login
    useEffect(()=>{
        const em = getCookie("em");
        if(em) nav("/dashboard");
    },[])

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
                    <span>Already have an account? <Link to={"/"}>Login</Link></span>
                </div>
                <p className="reg-err" ref={err}></p>
            </div>
        </>
    )
}