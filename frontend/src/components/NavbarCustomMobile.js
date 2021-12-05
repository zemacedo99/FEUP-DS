import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import '../style/navbar.css';
import {
  Navbar, Container, Nav, Row, Col,
} from 'react-bootstrap';
import { BsSearch, BsListUl, BsBookmark } from 'react-icons/bs';
import { BiHome } from 'react-icons/bi';

export default function NavbarCustomMobile() {
  return (
    <Navbar className="color-navbar navbar-mobile" expand="lg">
      <Container id="navbar-container">
        <Nav className="me-auto">
          <Container className="navbar-container">
            <Row>
              <Col xs="3">
                <Nav.Link className="navbar-buttons" href="/"><BiHome /></Nav.Link>
              </Col>
              <Col xs="3">
                <Nav.Link className="navbar-buttons" href="/"><BsListUl /></Nav.Link>
              </Col>
              <Col xs="3">
                <Nav.Link className="navbar-buttons" href="/"><BsSearch /></Nav.Link>
              </Col>
              <Col xs="3">
                <Nav.Link className="navbar-buttons" href="/"><BsBookmark /></Nav.Link>
              </Col>
            </Row>
          </Container>
        </Nav>
      </Container>
    </Navbar>
  );
}
