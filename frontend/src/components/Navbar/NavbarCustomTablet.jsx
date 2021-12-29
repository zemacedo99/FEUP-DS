import React, { useState } from 'react';
import {
  Row, Col, Navbar,
} from 'react-bootstrap';
import { BsListUl, BsBookmark } from 'react-icons/bs';

import SearchBar from '../SearchBar';
import {
  NavbarTablet, NavbarNav, NavbarContainer, NavbarLink, NavbarButtons, ColContainer,
} from './style';

export default function NavbarCustomDesktop() {
  const [text, setText] = useState('');
  return (
    <NavbarTablet expand="lg">
      <NavbarNav>
        <NavbarContainer>
          <Row>
            <Col xs="4" md="6">
              <ColContainer>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
              </ColContainer>
            </Col>
            <Col xs="6" md="4">
              <ColContainer>
                <SearchBar text={text} setText={setText} />
              </ColContainer>
            </Col>
            <Col xs="2" md="2">
              <NavbarButtons>
                <NavbarLink href="/"><BsListUl /></NavbarLink>
                <NavbarLink href="/bookmarks"><BsBookmark /></NavbarLink>
              </NavbarButtons>
            </Col>
          </Row>
        </NavbarContainer>
      </NavbarNav>
    </NavbarTablet>
  );
}
