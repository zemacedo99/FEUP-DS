import React from 'react';
import {
  Row, Col, Navbar,
} from 'react-bootstrap';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';

import SearchBar from '../SearchBar';

import {
  NavbarDesktop, NavbarButtons, NavbarNav, NavbarContainer, ColContainer, activeStyle,
  unactiveStyle,
} from './style';

export default function NavbarCustomDesktop() {
  const navigate = useNavigate();
  const location = useLocation();

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      navigate('/search');
    }
  };
  
  return (
    <NavbarDesktop expand="lg">
      <NavbarNav>
        <NavbarContainer>
          <Row>
            <Col md="6">
              <ColContainer>
                <Navbar.Brand href="/"><img width="100px" height="auto" src="/logo.ico" alt="logo" /></Navbar.Brand>
              </ColContainer>
            </Col>
            <Col md="6">
              <NavbarButtons>
                { location.pathname !== '/search' && (<ColContainer><SearchBar onKeyUp={onKeyUp} /></ColContainer>)}
                <NavLink className="hovering" to="/about" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}> About</NavLink>
                <NavLink className="hovering" to="/patterns" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}> Patterns</NavLink>
                <NavLink className="hovering" to="/favorites" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}> Favorites</NavLink>
                <NavLink className="hovering" to="/saved" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}> Saved</NavLink>
              </NavbarButtons>
            </Col>
          </Row>
        </NavbarContainer>
      </NavbarNav>
    </NavbarDesktop>
  );
}
