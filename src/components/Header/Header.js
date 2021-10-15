import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.png'
import './Header.css'
import Home from '../Home/Home';

const Header = () => {
    return (
        <div>
            <Container>
                <div className="navbar-setting mt-3">
                    <Link to="/home"><img className="logo-size" src={logo} alt="" /></Link>
                    <nav className="nav-link">
                        <Link className="login me-3" to="/login"><FontAwesomeIcon icon={faCartArrowDown} /></Link>
                        <Link className="login me-2" to="/login">Login</Link>
                        <Link className="signup" to="/signup">Sign Up</Link>
                    </nav>
                </div>
            </Container>
            <div>
                <Home />
            </div>
        </div>
    );
};

export default Header;