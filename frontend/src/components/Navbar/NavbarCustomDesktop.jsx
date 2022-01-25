import React from 'react';
import {
  Row, Col, Navbar,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import SearchBar from '../SearchBar';
import {
  NavbarDesktop, NavbarButtons, NavbarNav, NavbarContainer, NavbarLink, ColContainer,
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
                <Navbar.Brand href="/"><img width="100px" height="auto" src="/logo.ico" alt="logo" /></Navbar.Brand>
              </ColContainer>
            </Col>
            <Col md="3">
              <ColContainer>
                <SearchBar onKeyUp={onKeyUp} />
              </ColContainer>
            </Col>
            <Col md="5">
              <NavbarButtons>
                <NavbarLink href="/about">About</NavbarLink>
                <NavbarLink href="/">Patterns</NavbarLink>
                <NavbarLink href="/bookmarks">Bookmarks</NavbarLink>
              </NavbarButtons>
            </Col>
          </Row>
        </NavbarContainer>
      </NavbarNav>
    </NavbarDesktop>
  );
}
