import React from 'react';
import {
  Row, Col, Navbar,
} from 'react-bootstrap';
import { BsListUl, BsBookmark, BsStar } from 'react-icons/bs';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';

import SearchBar from '../SearchBar';
import {
  NavbarTablet, NavbarNav, NavbarContainer, NavbarButtons, ColContainer, activeStyle,
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
    <NavbarTablet expand="lg" data-testid="navbar_tablet">
      <NavbarNav>
        <NavbarContainer>
          <Row>
            <Col xs="4" md="6">
              <ColContainer>
                <Navbar.Brand href="/"><img width="85px" height="auto" src="/logo.ico" alt="logo" /></Navbar.Brand>
              </ColContainer>
            </Col>
            <Col xs="8" md="6">
              <NavbarButtons>
                { location.pathname !== '/search' && (<ColContainer><SearchBar onKeyUp={onKeyUp} /></ColContainer>)}
                <NavLink className="hovering" to="/patterns" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>
                  <BsListUl />
                </NavLink>
                <NavLink className="hovering" to="/favorites" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>
                  <BsStar />
                </NavLink>
                <NavLink className="hovering" to="/saved" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>
                  <BsBookmark />
                </NavLink>
              </NavbarButtons>
            </Col>
          </Row>
        </NavbarContainer>
      </NavbarNav>
    </NavbarTablet>
  );
}
