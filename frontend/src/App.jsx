import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavbarCustomDesktop, NavbarCustomTablet, NavbarCustomMobile } from './components/Navbar';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import HelpAboutUs from './pages/HelpAboutUs';

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
          <Route path="/help" exact element={<HelpAboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
