import "./page.css"
import { RiHomeLine, RiHistoryLine, RiHeartFill } from "react-icons/ri"; 
import { MdVideoLibrary } from "react-icons/md";
import { GiFlamer } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { useLogin } from "../Login/login-context";
import { NavLink } from "react-router-dom";

export const Sidebar = ({sidebar, handleToggleSidebar}) => {
    const {setLogin} = useLogin();
    return(<>
        <div className="container-sidebar">
            <nav className={sidebar ? "sidebar open" : "sidebar"}
            onClick={() => handleToggleSidebar()}
            >
                <NavLink exact to="/" className="nav-link" activeClassName="nav-active">
                    <RiHomeLine size={26} /> <span>Home</span>
                </NavLink>
                <li className="nav-link">
                    <GiFlamer size={26} /> <span>Top Videos</span>
                </li>
                <li className="nav-link">
                    <MdVideoLibrary size={26} /> <span>Library</span>
                </li>
                <NavLink to="/history" className="nav-link txt-deco-none txt-white" activeClassName="nav-active">
                    <RiHistoryLine size={26} /> <span>History</span>
                </NavLink>
                <NavLink to="/liked" className="nav-link txt-deco-none txt-white" activeClassName="nav-active">
                    <RiHeartFill size={26} /> <span>Liked Videos</span>
                </NavLink>               

                <hr />

                <li className="nav-link">
                    <BiLogOut size={26} onClick={() => setLogin(false)}/> <span>Logout</span>
                </li>                

            </nav>
        </div>
    </>)
}