import { FcVideoProjector } from "react-icons/fc";
import "../../styles.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../context/user-context";
import { loginRequest } from "../../api/AuthApi";
import { showNotification } from "../Utilities/toast";

export const LoginScreen = () => {
    const {setUser, setToken} = useUser();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async() => {
        const { success, message, user, authToken } = await loginRequest(username, password);
        showNotification(message);
        if(success) {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", authToken);
            setUser(user);
            setToken(authToken);
        }
    }

    return(<>
        <div className="login">
            <div className="container-login">
                <FcVideoProjector size={100} />
                <p className="txt-xl txt-700">Login</p>
                <p className="mg-t-05">This is a "Youtube" for animals.</p>
                <div className="w-100 mg-t-2">
                    <div className="container-inputs">
                        <p className="pd-05 mg-05">Username</p>
                        <input onChange={(e) => setUsername(e.target.value)} className="card-w-20 pd-05 mg-05" type="text" placeholder="Enter Username"/>
                    </div>
                    <div className="container-inputs">
                        <p className="pd-05 mg-05">Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} className="card-w-20 pd-05 mg-05" type="password" placeholder="Enter Password"/>
                    </div>
                </div>
                <button onClick={() => loginHandler()} className="pd-05 pd-lr-1 mg-tb-1 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow">Login</button>
                <Link className="nav-link txt-deco-none txt-white" to="/">Go back Home</Link>
                <Link className="nav-link txt-deco-none txt-white" to="/register">Register</Link>
            </div>
            <div id="notification-container"></div>
        </div>
    </>)
}