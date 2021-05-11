import { FcVideoProjector } from "react-icons/fc";
import { Page } from "../Layout/Page";
import "../../styles.css"
import { useLogin } from "./login-context";

export const LoginScreen = () => {
    const { login, setLogin } = useLogin();

    const buttonClickHandler = () => {
        setLogin(true);
    }

    return(<>
        <div className="login">
            <div className="container-login">
                <FcVideoProjector size={100} />
                <button onClick={() => buttonClickHandler()}>Login</button>
                <p>This is a "Youtube" for animals. Made using Youtube API</p>
            </div>
        </div>
        {login && <Page />}
    </>)
}   