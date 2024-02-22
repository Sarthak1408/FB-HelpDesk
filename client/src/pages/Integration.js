import FacebookLogin from "@greatsumini/react-facebook-login";
import {useRef} from "react";
import {getCookie, setCookie} from "../utils/CookieMaster";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const Integration = () => {

    //Navigator
    const nav = useNavigate();

    //Refs
    const err = useRef(null);

    //Check Integration
    useEffect(() => {
        const prof = getCookie("prof");
        if (prof) nav("/dashboard");
    }, [])

    return (
        <>
            <div className="integration center-grid bg-blue container">
                <div className="card">
                    <div className="head-sm">Facebook Page Integration</div>
                    <FacebookLogin
                        appId="409568174786925"
                        onSuccess={(response) => {
                            err.current.classList.add("active");
                            err.current.innerText = "Login Success!"
                            console.log(response);
                            setCookie("prof", JSON.stringify(response));
                            nav("/dashboard");
                        }}
                        onFail={(error) => {
                            console.log(error);
                            err.current.classList.add("active");
                            err.current.innerText = "Login Success (Demo)!"
                            nav("/dashboard");
                        }}
                        onProfileSuccess={(response) => {
                            console.log('Get Profile Success!', response);
                        }}
                        style={{
                            backgroundColor: '#4267b2',
                            color: '#fff',
                            fontSize: '16px',
                            padding: '12px 24px',
                            border: 'none',
                            borderRadius: '4px',
                        }}
                    />
                </div>
                <p className="log-err" ref={err}/>
            </div>
        </>
    )
}