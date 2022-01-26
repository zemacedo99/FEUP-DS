import React from 'react';
import {
  Row, Col, Navbar,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import {
  NavbarDesktop, NavbarButtons, NavbarNav, NavbarContainer, ColContainer, activeStyle,
  unactiveStyle,
} from './style';

export default function NavbarCustomDesktop() {
  return (
    <NavbarDesktop expand="lg">
      <NavbarNav>
        <NavbarContainer>
          <Row>
            <Col md="6">
              <ColContainer>
                <Navbar.Brand href="/"><img width="100px" height="auto" src="/favicon.ico" alt="logo" /></Navbar.Brand>
              </ColContainer>
            </Col>
            <Col md="6">
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
