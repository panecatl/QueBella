import './index.scss';
import Logo from '../../assets/images/quebella.png'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCookie, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo' />
        </Link>

        {/* home button */}
        <nav>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/">
                <FontAwesomeIcon icon={faHome} color="#cb6e9a" />
            </NavLink>
        {/* cookies */}
        <NavLink 
        exact="true" 
        activeclassname="active" 
        className="cookies-link" 
        to="/cookies">
                <FontAwesomeIcon icon={faCookie} color="#cb6e9a" />
        </NavLink>
        {/* contact */}
        <NavLink 
        exact="true" 
        activeclassname="active" 
        className="contact-link" 
        to="/cantact">
                <FontAwesomeIcon icon={faEnvelope} color="#cb6e9a" />
        </NavLink>
        </nav>
        <ul>
            {/* facebook */}
            <li>
            <a target='_blank' rel='noreferrer' href='https://www.facebook.com/quebellacookies/'>
                <FontAwesomeIcon icon={faFacebook} color='#cb6e9a' />
            </a>
            </li>
            {/* insta */}
            <li>
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/quebellacookies/'>
                <FontAwesomeIcon icon={faInstagram} color='#cb6e9a' />
            </a>
            </li>
            {/* venmo */}
            <li>
            <a target='_blank' rel='noreferrer' href='https://account.venmo.com/u/Lisa-DeLaLuz'>
                <FontAwesomeIcon icon={faCartShopping} color='#cb6e9a' />
            </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;