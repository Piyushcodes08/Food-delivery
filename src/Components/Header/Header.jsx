import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png'
import { Link as ScrollLink } from 'react-scroll';

import './Header.css'


const Header = () => {
    return (
        <header>
            <Navbar className='navbar' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <Link className='logo'>
                            <img src={Logo} alt="logo" className='image-fluid' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={ScrollLink} to="hero" smooth={true} duration={100} >Home</Nav.Link>
                            <Nav.Link as={ScrollLink} to="about" smooth={true} duration={100} >About</Nav.Link>
                            <Nav.Link as={ScrollLink} to="menu" smooth={true} duration={100} >Our Menu</Nav.Link>
                            <Nav.Link as={ScrollLink} to="shop" smooth={true} duration={100} >Shop</Nav.Link>
                            <Nav.Link as={ScrollLink} to="blog" smooth={true} duration={100} offset={-300}>Blog</Nav.Link>
                            <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={100} >Contact</Nav.Link>
                            <Nav.Link as={Link} to='/'><i className="bi bi-bag"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header
