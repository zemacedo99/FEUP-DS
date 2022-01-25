import React from 'react';
import {
  Row, Col, Navbar,
} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import SearchBar from '../SearchBar';
import {
  NavbarDesktop, NavbarButtons, NavbarNav, NavbarContainer, NavbarLink, ColContainer,
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
    <NavbarDesktop expand="lg" data-testid="navbar_desktop">
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
                { location.pathname !== '/search' && (<ColContainer><SearchBar onKeyUp={onKeyUp} /></ColContainer>) }
                <NavbarLink href="/about" data-testid="about_button">About</NavbarLink>
                <NavbarLink href="/" data-testid="patterns_button">Patterns</NavbarLink>
                <NavbarLink href="/bookmarks" data-testid="bookmarks_button">Bookmarks</NavbarLink>
              </NavbarButtons>
            </Col>
          </Row>
        </NavbarContainer>
      </NavbarNav>
    </NavbarDesktop>
  );
}
