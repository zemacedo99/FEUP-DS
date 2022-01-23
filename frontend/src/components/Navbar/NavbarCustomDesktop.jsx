import React from 'react';
import {
  Row, Col, Navbar,
} from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';

import SearchBar from '../SearchBar';
import {
  NavbarDesktop, NavbarButtons, NavbarNav, NavbarContainer, ColContainer, activeStyle,
  unactiveStyle,
} from './style';

export default function NavbarCustomDesktop() {
  const navigate = useNavigate();

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
            <Col md="4">
              <ColContainer>
                <Navbar.Brand href="/"><img width="90em" height="auto" src="/logo.ico" alt="logo" /></Navbar.Brand>
              </ColContainer>
            </Col>
            <Col md="3">
              <ColContainer>
                <SearchBar onKeyUp={onKeyUp} />
              </ColContainer>
            </Col>
            <Col md="5">
              <NavbarButtons>
                <NavLink className="hovering" to="/about" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}> About</NavLink>
                <NavLink className="hovering" to="/" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}> Patterns</NavLink>
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
