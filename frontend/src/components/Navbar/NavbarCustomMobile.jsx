import React from 'react';
import {
  Row, Col, Navbar,
} from 'react-bootstrap';
import {
  BiSearch, BiListUl, BiBookmark,
} from 'react-icons/bi';

import {
  NavbarMobile, NavbarContainer, NavbarLink, NavbarNav,
} from './style';

export default function NavbarCustomMobile() {
  return (
    <NavbarMobile expand="lg">
      <NavbarNav>
        <NavbarContainer>
          <Row>
            <Col xs="3">
              <NavbarLink href="/"><Navbar.Brand href="/"><img width="50px" height="auto" src="/logo.ico" alt="logo" /></Navbar.Brand></NavbarLink>
            </Col>
            <Col xs="3">
              <NavbarLink href="/"><BiListUl /></NavbarLink>
            </Col>
            <Col xs="3">
              <NavbarLink href="/search"><BiSearch /></NavbarLink>
            </Col>
            <Col xs="3">
              <NavbarLink href="/bookmarks"><BiBookmark /></NavbarLink>
            </Col>
          </Row>
        </NavbarContainer>
      </NavbarNav>
    </NavbarMobile>
  );
}
