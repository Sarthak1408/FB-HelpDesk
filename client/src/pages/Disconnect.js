import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getCookie} from "../utils/CookieMaster";

export const Disconnect = () => {

    //Navigator
    const nav = useNavigate();

    //Check Login
    useEffect(()=>{
        const em = getCookie("em");
        if(!em) nav("/");
    },[])

    return(
        <>
            <div className="disconnect center-grid bg-blue container">
                <div className="card">
                    <div className="head-sm">Facebook Page Integration</div>
                    <div className="text-lg">Integrated Page: <span className="font-bold">RichPanel</span></div>
                    <button className="button-lg bg-red text-white w-100" onClick={()=>{nav("/integration")}}>Delete Integration</button>
                    <button className="button-lg bg-blue text-white w-100" onClick={()=>{nav("/dashboard")}}>Reply to messages</button>
                </div>
            </div>
        </>
    )
}