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
import { NavLink } from 'react-router-dom';

import {
  NavbarMobile, NavbarContainer, NavbarNav, activeStyle,
  unactiveStyle,
} from './style';

export default function NavbarCustomMobile() {
  return (
    <NavbarMobile expand="lg" data-testid="navbar_mobile">
      <NavbarNav>
        <NavbarContainer>
          <Row>
            <Col xs="3">
              <NavLink className="hovering" to="/" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>
                <BiHome size={21} />
              </NavLink>
            </Col>
            <Col xs="3">
              <NavLink className="hovering" to="/patterns" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>
                <BiListUl size={21} />
              </NavLink>
            </Col>
            <Col xs="3">
              <NavLink className="hovering" to="/search" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>
                <BiSearch size={21} />
              </NavLink>
            </Col>
            <Col xs="3">
              <NavLink className="hovering" to="/favorites" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>
                <BsBookmarkStar size={21} />
              </NavLink>
            </Col>
          </Row>
        </NavbarContainer>
      </NavbarNav>
    </NavbarMobile>
  );
}
