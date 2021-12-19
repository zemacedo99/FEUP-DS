import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavbarCustomDesktop, NavbarCustomTablet, NavbarCustomMobile } from './components/Navbar';
import About from './pages/About';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import PatternInfoPage from './pages/PatternInfoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarCustomDesktop />
        <NavbarCustomTablet />
        <NavbarCustomMobile />
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/search" exact element={<SearchPage />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/pattern" exact element={<PatternInfoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
