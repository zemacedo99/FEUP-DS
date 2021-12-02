import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddBookmark from './pages/AddBookmark';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<AddBookmark />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
