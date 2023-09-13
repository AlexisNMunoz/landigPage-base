import Navbar from "../Navbar/Navbar"
import "./header.css"

import { useState } from "react"

function Header() {

    const [open, isOpen] = useState(false)

    const handleIsOpen = () => {
        isOpen(!open)
    }

    return (
        <header className="header">
            <div className="header__container">
                <h2 className="header__logo">companía</h2>
                <h2
                    className="header__closed"
                    onClick={handleIsOpen}
                >Menu</h2>
                <Navbar open={open} />
            </div>
        </header>
    )
}

export default Header
