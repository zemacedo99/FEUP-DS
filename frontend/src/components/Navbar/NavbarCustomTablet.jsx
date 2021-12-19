import React from 'react';
import {
  Row, Col, Navbar,
} from 'react-bootstrap';
import { BsSearch, BsListUl, BsBookmark } from 'react-icons/bs';

import {
  NavbarTablet, NavbarNav, NavbarContainer, NavbarLink, NavbarButtons, ColContainer,
} from './style';

export default function NavbarCustomDesktop() {
  return (
    <NavbarTablet expand="lg">
      <NavbarNav>
        <NavbarContainer>
          <Row>
            <Col xs="6">
              <ColContainer>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
              </ColContainer>
            </Col>
            <Col xs="6">
              <NavbarButtons>
                <NavbarLink href="/"><BsListUl /></NavbarLink>
                <NavbarLink href="/search"><BsSearch /></NavbarLink>
                <NavbarLink href="/"><BsBookmark /></NavbarLink>
              </NavbarButtons>
            </Col>
          </Row>
        </NavbarContainer>
      </NavbarNav>
    </NavbarTablet>
  );
}
