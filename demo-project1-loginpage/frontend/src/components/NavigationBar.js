import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = ({ isLoggedIn, onLogout }) => {
    const location = useLocation();
    const handleLogoutClick = (e) => {
        e.preventDefault();
        onLogout();
    };

    if (location.pathname === '/login' || location.pathname === '/register') {
        return null;
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {!isLoggedIn && <Nav.Link as={Link} to="/register">Register</Nav.Link>}
                    {!isLoggedIn && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    {isLoggedIn && <Nav.Link as={Link} to="/profile">Profile</Nav.Link>}
                    {isLoggedIn && (
                        <Nav.Link href="/logout" onClick={handleLogoutClick}>
                            Logout
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;