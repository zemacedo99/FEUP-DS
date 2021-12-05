import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import { BiHome } from 'react-icons/bi';
import { BsSearch, BsListUl, BsBookmark } from 'react-icons/bs';

import {
  NavbarMobile, NavbarNav, NavbarContainer, NavbarLink,
} from './style';

export default function NavbarCustomMobile() {
  return (
    <NavbarMobile expand="lg">
      <NavbarContainer>
        <NavbarNav>
          <NavbarContainer>
            <Row>
              <Col xs="3">
                <NavbarLink href="/"><BiHome /></NavbarLink>
              </Col>
              <Col xs="3">
                <NavbarLink href="/"><BsListUl /></NavbarLink>
              </Col>
              <Col xs="3">
                <NavbarLink href="/"><BsSearch /></NavbarLink>
              </Col>
              <Col xs="3">
                <NavbarLink href="/"><BsBookmark /></NavbarLink>
              </Col>
            </Row>
          </NavbarContainer>
        </NavbarNav>
      </NavbarContainer>
    </NavbarMobile>
  );
}
