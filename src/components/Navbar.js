import { useState } from "react"
import { Link } from "react-router-dom"
import menu from '../images/menu.png';
import xbutton from '../images/x.png';
const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
            <nav className="navbar">
                <h3 className="logo">
                    <Link to="/" className="home">
                        INVITATION CARD MAKER
                    </Link></h3>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}>
                    <>
                        <Link to="/" className="home">
                            <li>DETAIL FORM</li>
                        </Link>
                    </>
                </ul>
                <button className="mobile-menu-icon"
                    onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (
                        <img src={xbutton} alt="Logo" height='20' style={{ backgroundColor: 'white' }} />
                    ) : (
                        <img src={menu} alt="Logo" height='20' style={{ backgroundColor: 'white' }} />
                    )}
                </button>
            </nav>

        </>
    )
}
export default NavBar