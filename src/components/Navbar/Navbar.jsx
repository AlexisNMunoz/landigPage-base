/* eslint-disable react/prop-types */
import "./navbar.css"

function Navbar({ open }) {
    return (
        <nav className={`nav ${!open ? "isVisible" : ""}`}>
            <ul className="nav__ul">
                <li className="nav__link"><a href="#home">Home</a></li>
                <li className="nav__link"><a href="#services">Services</a></li>
                <li className="nav__link"><a href="#team">Team</a></li>
                <li className="nav__link"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
