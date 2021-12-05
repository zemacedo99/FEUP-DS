import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import '../style/navbar.css';
import { Navbar, Container, Nav, Form, FormControl, Button, InputGroup, Row, Col } from 'react-bootstrap';
import { BsSearch, BsListUl, BsBookmark } from "react-icons/bs";

export default class NavbarCustomTablet extends React.Component {
  render() {
    return (<Navbar className="color-navbar navbar-tablet" expand="lg">
      <Container id="navbar-container">
        <Nav className="me-auto">
          <Container className="navbar-container">
            <Row>
              <Col xs="9">
                <Navbar.Brand href="/" id="logo">Logo</Navbar.Brand>
              </Col>
              <Col xs="1">
                <Nav.Link className="navbar-buttons" href="/"><BsListUl /></Nav.Link>
              </Col>
              <Col xs="1">
                <Nav.Link className="navbar-buttons" href="/"><BsSearch /></Nav.Link>
              </Col>
              <Col xs="1">
                <Nav.Link className="navbar-buttons" href="/"><BsBookmark /></Nav.Link>
              </Col>
            </Row>
          </Container>
        </Nav>
      </Container>
    </Navbar >);
  }
}

