import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavbarCustomDesktop, NavbarCustomTablet, NavbarCustomMobile } from './components/Navbar';
import SearchContextProvider from './context/SearchContext';
import About from './pages/About';
import BookmarksPage from './pages/BookmarksPage';
import FavoritesPage from './pages/FavouritesPage';
import MainPage from './pages/MainPage';
import Page404 from './pages/Page404';
import PatternInfoPage from './pages/PatternInfoPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <SearchContextProvider>
          <NavbarCustomDesktop />
          <NavbarCustomTablet />
          <NavbarCustomMobile />
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/search" exact element={<SearchPage />} />
            <Route path="/favorites" exact element={<FavoritesPage />} />
            <Route path="/saved" exact element={<BookmarksPage />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/pattern/:id/patlet" exact element={<PatternInfoPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </SearchContextProvider>
      </div>
    </Router>
  );
}

export default App;
