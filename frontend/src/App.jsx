import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddBookmark from './pages/AddBookmark';
import AddFavorite from './pages/AddFavorite';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<AddBookmark />} />
        </Routes>
        <Routes>
          <Route path="/" exact element={<AddFavorite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
