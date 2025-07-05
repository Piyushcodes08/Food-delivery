import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png'
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
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/'>About</Nav.Link>
                            <Nav.Link as={Link} to='/'>Our menu</Nav.Link>
                            <Nav.Link as={Link} to='/'>Shop</Nav.Link>
                            <Nav.Link as={Link} to='/'>Blog</Nav.Link>
                            <Nav.Link as={Link} to='/'>Contact</Nav.Link>
                            <Nav.Link as={Link} to='/'><i class="bi bi-bag"></i></Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </header>
    )
}

export default Header
