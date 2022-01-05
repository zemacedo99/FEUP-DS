import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavbarCustomDesktop, NavbarCustomTablet, NavbarCustomMobile } from './components/Navbar';
import SearchContextProvider from './context/SearchContext';
import About from './pages/About';
import BookmarksPage from './pages/BookmarksPage';
import MainPage from './pages/MainPage';
import PatternInfoPage from './pages/PatternInfoPage';
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
          <Route
            path="/search"
            exact
            element={
              (
                <SearchContextProvider>
                  <SearchPage />
                </SearchContextProvider>
              )
            }
          />
          <Route path="/bookmarks" exact element={<BookmarksPage />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/pattern/:id/patlet" exact element={<PatternInfoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
