import React from 'react'
import { Link } from 'gatsby'
import { Nav, Navbar } from 'react-bootstrap'

const Footer = () => (
    <footer id="footer">
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" data-target=""/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/gallery">
                        <Nav>Gallery</Nav>
                    </Link>
                    <Link to="/blog">
                        <Nav>Blog</Nav>
                    </Link>
                    <Link to="/about">
                        <Nav>About</Nav>
                    </Link>
                    <Link to="/contact">
                        <Nav>Contact</Nav>
                    </Link>
                </Nav>
            </Navbar.Collapse>
            <span>
                <p>
                    © Powered by <a 
                        href="https://www.errolwatson.io/" 
                        target="_blank" 
                        rel="noreferrer">Errol Watson</a> {new Date().getFullYear()}
                </p>
            </span>
        </Navbar>
    </footer>
)

export default Footer