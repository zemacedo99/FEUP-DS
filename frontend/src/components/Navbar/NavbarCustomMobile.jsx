import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import {
  BiHome, BiSearch, BiListUl, BiBookmark, BiStar,
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
              <NavbarLink href="/"><BiHome /></NavbarLink>
            </Col>
            <Col xs="3">
              <NavbarLink href="/"><BiListUl /></NavbarLink>
            </Col>
            <Col xs="3">
              <NavbarLink href="/search"><BiSearch /></NavbarLink>
            </Col>
            <Col xs="3">
              <NavbarLink href="/favorites"><BiStar /></NavbarLink>
            </Col>
            <Col xs="3">
              <NavbarLink href="/saved"><BiBookmark /></NavbarLink>
            </Col>
          </Row>
        </NavbarContainer>
      </NavbarNav>
    </NavbarMobile>
  );
}
