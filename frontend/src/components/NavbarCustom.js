import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import '../style/navbar.css';
import { Navbar, Container, Nav, Form, FormControl, Button, InputGroup, Row, Col } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";

export default class NavbarCustom extends React.Component {
  render() {
    return (<Navbar className="color-navbar" expand="lg">
      <Container id="navbar-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Container className="navbar-container">
              <Row>
                <Col xxl="5">
                  <Navbar.Brand href="/" id="logo">Logo</Navbar.Brand>
                </Col>
                <Col xxl="4">
                  <Form className="d-flex">
                    <InputGroup className="mb-3 search-bar-input-group">
                      <InputGroup.Text id="basic-addon1" className="search-icon"><BsSearch /></InputGroup.Text>
                      <FormControl 
                        className="search-bar"
                        placeholder="Search here ..."
                        aria-label="Search here ..."
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Form>
                </Col>
                <Col xxl="3">
                  <Nav className="navbar-buttons">
                    <Nav.Link href="/">Help</Nav.Link>
                    <Nav.Link href="/">Patterns</Nav.Link>
                    <Nav.Link href="/">Bookmarks</Nav.Link>
                  </Nav>
                </Col>
              </Row>
            </Container>
            
            <div>
              
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>);
  }
}

