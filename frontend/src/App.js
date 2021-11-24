import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Example from './pages/Example';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Example />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
