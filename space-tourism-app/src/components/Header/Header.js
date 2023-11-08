import './header.css';
import logo from './../assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    function toggleMobileMenu() {
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header>
            <svg className="site-logo-svg" width="35%" height="1" viewBox="0 0 100% 1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.251485" width="100%" height="1" fill="white" />
            </svg>
            <div className='header-container'>
                <div className="site-logo"><img src={logo} alt="Logo" /></div>
                <div className="menu-container">
                    <button className='menu-icon' onClick={toggleMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                            <rect width="24" height="3" fill="#D0D6F9" />
                            <rect y="9" width="24" height="3" fill="#D0D6F9" />
                            <rect y="18" width="24" height="3" fill="#D0D6F9" />
                        </svg>
                    </button>
                    {isMobileMenuOpen && (
                        <nav className="mobile-navbar">
                            <ul className="mobile-menu">
                                <li><NavLink to="/home" activeClassName="active"><span className='navbar-numbers'>00</span> HOME</NavLink></li>
                                <li><NavLink to="/destination" activeClassName="active"><span className='navbar-numbers'>01</span> DESTINATION</NavLink></li>
                                <li><NavLink to="/crew" activeClassName="active"><span className='navbar-numbers'>02</span> CREW</NavLink></li>
                                <li><NavLink to="/technology" activeClassName="active"><span className='navbar-numbers'>03</span> TECHNOLOGY</NavLink></li>
                            </ul>
                        </nav>
                    )}
                </div>
                <nav className="navbar">
                    <ul className="menu">
                        <li><NavLink to="/home" activeClassName="active"><span className='navbar-numbers'>00</span> HOME</NavLink></li>
                        <li><NavLink to="/destination" activeClassName="active"><span className='navbar-numbers'>01</span> DESTINATION</NavLink></li>
                        <li><NavLink to="/crew" activeClassName="active"><span className='navbar-numbers'>02</span> CREW</NavLink></li>
                        <li><NavLink to="/technology" activeClassName="active"><span className='navbar-numbers'>03</span> TECHNOLOGY</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
