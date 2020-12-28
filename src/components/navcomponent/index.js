import React from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import { Nav, Navbar } from 'react-bootstrap'

const NavComponent = ( { siteTitle } ) => (
    <Navbar bg="dark" variant="dark" expand="md">
        <Link to="/">
          <Navbar.Brand>
            <h3>{siteTitle}</h3>
          </Navbar.Brand>
        </Link>
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
    </Navbar>
)


NavComponent.propTypes = {
  siteTitle: PropTypes.string,
}

NavComponent.defaultProps = {
  siteTitle: ``,
}

export default NavComponent