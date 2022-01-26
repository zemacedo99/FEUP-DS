import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import {
  BiHome, BiSearch, BiListUl,
} from 'react-icons/bi';
import {
  BsBookmarkStar,
} from 'react-icons/bs';

import {
  NavbarMobile, NavbarContainer, NavbarLink, NavbarNav,
} from './style';

export default function NavbarCustomMobile() {
  return (
    <NavbarMobile expand="lg" data-testid="navbar_mobile">
      <NavbarNav>
        <NavbarContainer>
          <Row>
            <Col xs="3">
              <NavbarLink href="/"><BiHome /></NavbarLink>
            </Col>
            <Col xs="3">
              <NavbarLink href="/patterns"><BiListUl /></NavbarLink>
            </Col>
            <Col xs="3">
              <NavbarLink href="/search"><BiSearch /></NavbarLink>
            </Col>
            <Col xs="3">
              <NavbarLink href="/favorites"><BsBookmarkStar /></NavbarLink>
            </Col>
          </Row>
        </NavbarContainer>
      </NavbarNav>
    </NavbarMobile>
  );
}
