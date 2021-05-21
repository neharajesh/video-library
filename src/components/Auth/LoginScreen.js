import { FcVideoProjector } from "react-icons/fc";
import "../../styles.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ROOT_URL } from "../../config";
import { useUser } from "../../context/user-context";

export const LoginScreen = () => {
    const {setUser} = useUser();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const loginHandler = async() => {
        try {
            const userDetails = {username, password}
            const response = await axios.post(`${ROOT_URL}/auth/signin`, userDetails, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            setMessage(response.data.message)
            response.data.success && setUser(response.data.user);
        } catch (err) {
            setMessage("Login Failed, error caught")
            console.log("Error occurred while loggin in, client side", err.message)
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
                <button onClick={loginHandler} className="pd-05 pd-lr-1 mg-tb-1 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow">Login</button>
                <p>{message}</p>
                <Link className="nav-link txt-deco-none txt-white" to="/">Go back Home</Link>
                <Link className="nav-link txt-deco-none txt-white" to="/register">Register</Link>
            </div>
        </div>
    </>)
}