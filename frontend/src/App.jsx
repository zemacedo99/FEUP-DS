import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
