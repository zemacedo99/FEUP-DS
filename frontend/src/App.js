import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Example from './pages/Example';
import NavbarCustomDesktop from './components/NavbarCustomDesktop';
import NavbarCustomTablet from './components/NavbarCustomTablet';
import NavbarCustomMobile from './components/NavbarCustomMobile';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarCustomDesktop />
        <NavbarCustomTablet />
        <NavbarCustomMobile />
        <Routes>
          <Route path="/" exact element={<Example />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
