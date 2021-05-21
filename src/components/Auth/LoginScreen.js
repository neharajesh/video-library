import { FcVideoProjector } from "react-icons/fc";
import { Page } from "../Layout/Page";
import "../../styles.css"
import { Link } from "react-router-dom";

export const LoginScreen = () => {
    return(<>
        <div className="login">
            <div className="container-login">
                <FcVideoProjector size={100} />
                <p>This is a "Youtube" for animals.</p>
                <label>Username  <input className="card-w-20 pd-05 mg-05" type="text" placeholder="Username" /></label>
                <label>Password {"   "}<input className="card-w-20 pd-05 mg-05" type="password" placeholder="Password" /></label>
                <button className="pd-05 pd-lr-1 mg-05 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow">Login</button>
                {/* change after adding register page */}
                <p>Click <Link to="/register">here</Link> to Register</p>
            </div>
        </div>
    </>)
}