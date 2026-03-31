import { NavLink } from "react-router"
import Logo from "../Assets/Logo.png"


function Header() {
    return (
        <nav>
            <NavLink to="/">
                <img src={Logo} alt="Logo Wealth Health" />
                <h1>HRnet</h1>
            </NavLink>
        </nav>
    )
}

export default Header