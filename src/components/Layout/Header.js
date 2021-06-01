import { FaBars } from 'react-icons/fa';
import { FiSearch } from "react-icons/fi";
// import { FcVideoProjector } from "react-icons/fc";
// import avatar from "../../images/avatar.jpg"
import "./page.css"
import { Link } from 'react-router-dom';
import { useUser } from '../../context/user-context';

export const Header = ({handleToggleSidebar}) => {
    const { user } = useUser();
    return (<>
        <div className="container container-header">
            <FaBars className="header-hamburger" size={26} onClick={() => handleToggleSidebar()}/>
            {/* <FcVideoProjector className="header-brand" size={50} /> */}
            <Link to="/" className="header-brand txt-700"> PETTUBE </Link>
            
            <form className="header-form">
                <input type="text" placeholder="Search" />
                <button type="submit"> <FiSearch size={22} /> </button>
            </form>
            {user.username === "" 
                ? <Link className="nav-link txt-deco-none txt-white" to="/login">Login</Link> 
                : <p>Hello, {user.name}</p>
            }
        </div>
    </>)
}
