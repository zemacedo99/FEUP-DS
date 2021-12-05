import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import { BsSearch, BsListUl, BsBookmark } from 'react-icons/bs';

import {
  NavbarTablet, NavbarNav, NavbarContainer, NavbarLink, NavbarLogo,
} from './style';

export default function NavbarCustomDesktop() {
  return (
    <NavbarTablet expand="lg">
      <NavbarContainer>
        <NavbarNav>
          <NavbarContainer>
            <Row>
              <Col xs="9">
                <NavbarLogo href="/">Logo</NavbarLogo>
              </Col>
              <Col xs="1">
                <NavbarLink href="/"><BsListUl /></NavbarLink>
              </Col>
              <Col xs="1">
                <NavbarLink href="/"><BsSearch /></NavbarLink>
              </Col>
              <Col xs="1">
                <NavbarLink href="/"><BsBookmark /></NavbarLink>
              </Col>
            </Row>
          </NavbarContainer>
        </NavbarNav>
      </NavbarContainer>
    </NavbarTablet>
  );
}
