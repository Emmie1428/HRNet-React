import { NavLink } from "react-router"
import Logo from "../../Assets/logo.png"
import "./Header.css"


function Header() {
    return (
        <header className="nav_container">
            <NavLink to="/">
                <img src={Logo} alt="Logo Wealth Health" className="logo"/>
            </NavLink>
        </header>
    )
}

export default Header