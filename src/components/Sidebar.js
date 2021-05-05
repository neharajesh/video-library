import "../styles.css"
import { RiHomeLine, RiHistoryLine, RiHeartFill } from "react-icons/ri"; 
import { MdVideoLibrary } from "react-icons/md";
import { GiFlamer } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { useLogin } from "../components/Login/login-context";
import { NavLink } from "react-router-dom";

export const Sidebar = ({sidebar, handleToggleSidebar}) => {
    const {setLogin} = useLogin();
    return(<>
        <div className="container-sidebar">
            <nav className={sidebar ? "sidebar open" : "sidebar"}
            onClick={() => handleToggleSidebar()}
            >
                <NavLink exact to="/" activeClassName="nav-active">
                    <RiHomeLine size={26} /> <span>Home</span>
                </NavLink>
                <li>
                    <GiFlamer size={26} /> <span>Top Videos</span>
                </li>
                <li>
                    <MdVideoLibrary size={26} /> <span>Library</span>
                </li>
                <li>
                    <RiHistoryLine size={26} /> <span>History</span>
                </li>
                <li>
                    <RiHeartFill size={26} /> <span>Liked Videos</span>
                </li>               

                <hr />

                <li>
                    <BiLogOut size={26} onClick={() => setLogin(false)}/> <span>Logout</span>
                </li>                

            </nav>
        </div>
    </>)
}