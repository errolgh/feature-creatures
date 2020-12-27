import React from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import { Nav, Navbar } from 'react-bootstrap'

const NavComponent = ( { siteTitle } ) => (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/">
                    <Nav>Home</Nav>
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
        </Navbar>
    </>
)


NavComponent.propTypes = {
  siteTitle: PropTypes.string,
}

NavComponent.defaultProps = {
  siteTitle: ``,
}

export default NavComponent