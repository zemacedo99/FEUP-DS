import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavbarCustomDesktop from './components/NavbarCustomDesktop';
import NavbarCustomMobile from './components/NavbarCustomMobile';
import NavbarCustomTablet from './components/NavbarCustomTablet';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
