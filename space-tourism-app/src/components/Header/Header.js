import './header.css'
import logo from '../../starter-code/assets/shared/logo.svg'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header>
            <div className="site-logo"><img src={logo}/></div>
            <svg width="33%" height="1" viewBox="0 0 100% 1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.251485" width="100%" height="1" fill="white" />
            </svg>
            <nav className="navbar">
                <ul className="menu">
                    <li><Link to={'/home'}><span className='navbar-numbers'>00</span> HOME</Link></li>
                    <li><Link to={'/destination'}><span className='navbar-numbers'>01</span> DESTINATION</Link></li>
                    <li><Link to={'/crew'}><span className='navbar-numbers'>02</span> CREW</Link></li>
                    <li><Link to={'/technology'}><span className='navbar-numbers'>03</span> TECHNOLOGY</Link></li>
                </ul>
            </nav>
        </header>
    )
}

