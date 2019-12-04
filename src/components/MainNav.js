import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/logo.jpeg';

const MainNav = () => {
  const [NavState, SetNav] = useState(false);
  return (
    <div className='MainNav'>
      <Navbar expand='lg' bg='dark' variant='dark'>
        <Link id='a-logo' to='/'>
          <img src={logo} alt='main logo' />
        </Link>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => SetNav(!NavState)}
        />
        <Navbar.Collapse in={NavState} id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink onClick={() => SetNav(false)} to='/MainDish'>
              MainDish
            </NavLink>
            <NavLink onClick={() => SetNav(false)} to='/Drinks'>
              Drinks
            </NavLink>
            <NavLink onClick={() => SetNav(false)} to='/Deserts'>
              Deserts
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default MainNav;
