import './header.css'
import logo from './../assets/shared/logo.svg'
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <div className="site-logo"><img src={logo} alt="Logo" /></div>
            <svg width="33%" height="1" viewBox="0 0 100% 1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.251485" width="100%" height="1" fill="white" />
            </svg>
            <nav className="navbar">
                <ul className="menu">
                    <li><NavLink to="/home" activeClassName="active"><span className='navbar-numbers'>00</span> HOME</NavLink></li>
                    <li><NavLink to="/destination" activeClassName="active"><span className='navbar-numbers'>01</span> DESTINATION</NavLink></li>
                    <li><NavLink to="/crew" activeClassName="active"><span className='navbar-numbers'>02</span> CREW</NavLink></li>
                    <li><NavLink to="/technology" activeClassName="active"><span className='navbar-numbers'>03</span> TECHNOLOGY</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}


