import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import '../style/navbar.css';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap'

export default class NavbarCustom extends React.Component{
  render(){
    return (<Navbar className="color-navbar" expand="lg">
    <Container id="navbar-container">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Navbar.Brand href="/" id="logo">Logo</Navbar.Brand>
          <Form id="search-bar" className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav className="navbar-buttons">
            <Nav.Link href="/">Help</Nav.Link>
            <Nav.Link href="/">Patterns</Nav.Link>
            <Nav.Link href="/">Bookmarks</Nav.Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar> );
  }
}