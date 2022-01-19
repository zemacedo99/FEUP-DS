import React from 'react';
import {
  Row, Col, Navbar,
} from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';

import SearchBar from '../SearchBar';
import {
  NavbarDesktop, NavbarButtons, NavbarNav, NavbarContainer, ColContainer, NavbarLink,
} from './style';

export default function NavbarCustomDesktop() {
  const navigate = useNavigate();

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      navigate('/search');
    }
  };

  const activeStyle = {
    textDecoration: 'none',
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#7F56D9',
    fontSize: '1rem',
    '@media screen and (minWidth: 481px)': {
      textAlign: 'right',
      padding: '0 0 0 1.5rem',
    },
    transition: '0.2s opacity',
    '&:hover': {
      color: '#7F56D9',
    },
  };

  const unactiveStyle = {
    textDecoration: 'none',
    textAlign: 'right',
    fontWeight: 'bold',
    color: 'black',
    fontSize: '1rem',
    '@media screen and (minWidth: 481px)': {
      textAlign: 'right',
      padding: '0 0 0 1.5rem',
    },
    transition: '0.2s opacity',
    onMouseOver: {
      color: '#7F56D9',
    },
  };

  return (
    <NavbarDesktop expand="lg">
      <NavbarNav>
        <NavbarContainer>
          <Row>
            <Col md="4">
              <ColContainer>
                <Navbar.Brand href="/"><img width="70px" height="auto" src="/logo.ico" alt="logo" /></Navbar.Brand>
              </ColContainer>
            </Col>
            <Col md="3">
              <ColContainer>
                <SearchBar onKeyUp={onKeyUp} />
              </ColContainer>
            </Col>
            <Col md="5">
              <NavbarButtons>
                <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}> About</NavLink>
                <NavbarLink href="/">Patterns</NavbarLink>
                <NavbarLink href="/favorites">Favorites</NavbarLink>
                <NavbarLink href="/saved">Saved</NavbarLink>
              </NavbarButtons>
            </Col>
          </Row>
        </NavbarContainer>
      </NavbarNav>
    </NavbarDesktop>
  );
}
