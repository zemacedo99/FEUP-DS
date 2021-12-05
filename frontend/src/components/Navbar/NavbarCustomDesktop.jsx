import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';

import SearchBar from '../SearchBar';
import {
  NavbarDesktop, NavbarLogo, NavbarButtons, NavbarNav, NavbarContainer, NavbarLink,
} from './style';

export default function NavbarCustomDesktop() {
  return (
    <NavbarDesktop expand="lg">
      <NavbarContainer>
        <NavbarNav>
          <NavbarContainer>
            <Row>
              <Col md="4">
                <NavbarLogo href="/">Logo</NavbarLogo>
              </Col>
              <Col md="3">
                <SearchBar />
              </Col>
              <Col md="5">
                <NavbarButtons>
                  <NavbarLink href="/">Help</NavbarLink>
                  <NavbarLink href="/">Patterns</NavbarLink>
                  <NavbarLink href="/">Bookmarks</NavbarLink>
                </NavbarButtons>
              </Col>
            </Row>
          </NavbarContainer>
        </NavbarNav>
      </NavbarContainer>
    </NavbarDesktop>
  );
}
