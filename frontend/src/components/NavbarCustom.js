import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import '../style/navbar.css';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap'

export default class NavbarCustom extends React.Component{
  render(){
    return (<Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Logo</Nav.Link>
          <Form id="search-bar" className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav.Link href="/">Patterns</Nav.Link>
          <Nav.Link href="/">Bookmarks</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar> );
  }
}