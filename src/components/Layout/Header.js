import { FaBars } from 'react-icons/fa';
import { FiSearch } from "react-icons/fi";
import { FcVideoProjector } from "react-icons/fc";
import avatar from "../../images/avatar.jpg"
import "./page.css"
import { Link } from 'react-router-dom';

export const Header = ({handleToggleSidebar}) => {
    return (<>
        <div className="container container-header">
            <FaBars className="header-hamburger" size={26} onClick={() => handleToggleSidebar()}/>
            <FcVideoProjector className="header-brand" size={50} />
            <form className="header-form">
                <input type="text" placeholder="Search" />
                <button type="submit"> <FiSearch size={22} /> </button>
            </form>
            {/* <img className="img-40 bdr-rad-round" src={avatar} alt="avatar" /> */}
            <Link to="/login">Login</Link>
        </div>
    </>)
}
