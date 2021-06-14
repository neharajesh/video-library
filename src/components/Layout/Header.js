import { FaBars } from 'react-icons/fa';
import { FiSearch } from "react-icons/fi";
import "./page.css"
import { Link } from 'react-router-dom';
import { initialUser, useUser } from '../../context/user-context';
import { useSearch } from '../../context/search-context';

export const Header = ({handleToggleSidebar}) => {
    const { user, setUser } = useUser();
    const { setSearchString } = useSearch();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        let params = event.target.value
        setSearchString(params);
    }

    const logoutHandler = () => {
        console.log("logging out.")
        setUser(initialUser)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    return (<>
        <div className="container container-header">
            <FaBars className="header-hamburger" size={26} onClick={() => handleToggleSidebar()}/>
            <Link to="/" className="header-brand txt-700"> PETTUBE </Link>
            
            <form className="header-form">
                <input type="text" placeholder="Search" onChange={(e) => formSubmitHandler(e)}/>
                <Link className="search-button" to="/search"> <FiSearch size={22} /> </Link>
            </form>

            <div>
                {user.name === "" 
                    ? <Link className="nav-link txt-deco-none txt-white" to="/login">Login</Link> 
                    : <p>Hello, {user.name}</p>
                }
                {user.name !== "" && <button onClick={() => logoutHandler()}> Logout </button>}
            </div>
        </div>
    </>)
}
