import { NavLink } from "react-router"
import Logo from "../../Assets/logo.png"
import "./Header.css"


function Header() {
    return (
        <nav className="nav_container">
            <NavLink to="/" className="nav_link">
                <img src={Logo} alt="Logo Wealth Health" className="logo"/>
                <h1 className="title">HRnet</h1>
            </NavLink>
        </nav>
    )
}

export default Header