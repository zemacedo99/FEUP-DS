import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import Example from './pages/Example';
import Navbar from './components/Navbar'
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Sheep from './pages/Sheep';
import Goat from './pages/Goat';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" exact component={Dogs} />
        <Route path="/cats" component={Cats} />
        <Route path="/sheep" component={Sheep} />
        <Route path="/goat" component={Goat} />
      </Routes>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Example />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
