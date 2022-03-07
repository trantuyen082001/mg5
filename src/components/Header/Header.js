import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer, Link } from 'react-router-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <LinkContainer to='/'>
              <Navbar.Brand>LOGO</Navbar.Brand>
          </LinkContainer>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <LinkContainer to='/'>
                  <Nav.Link class="nav-link active" aria-current="page">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/blog'>
                  <Nav.Link class="nav-link">Blog</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                  <Nav.Link class="nav-link">Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/account'>
                  <Nav.Link class="nav-link">Account</Nav.Link>
              </LinkContainer>
            </div>
          </div>
        </div>
    </nav>
    </header>
  )
}

export default Header