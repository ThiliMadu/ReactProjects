import { Link, NavLink } from 'react-router-dom';
import Logo from '../assests/logo.png'
export const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <img src={Logo} alt="RouteMate Logo" /> </Link>
            <span>Route Mates</span>
            <nav className='navigation'>
                <NavLink to="/" className="link" end>Home</NavLink>
                <NavLink to="/products" className="link">Products</NavLink>
                <NavLink to="/contact" className="link">Contact</NavLink>
            </nav>

        </header>
    )
}
