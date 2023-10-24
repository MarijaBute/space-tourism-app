import './header.css'
import logo from '../../starter-code/assets/shared/logo.svg'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header>
            <div className="site-logo"><img src={logo}/></div>
            <svg width="600" height="1" viewBox="0 0 473 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.251485" width="600" height="1" fill="white"/>
            </svg>
        <nav className="navbar">
            <ul className="menu">
                <Link to={'/home'}>00 HOME</Link>
                <Link to={'/destinations'}>01 DESTINATION</Link>
                <li>02 CREW</li>
                <li>03 TECHNOLOGY</li>
            </ul>
        </nav>

        </header>
    )
}

