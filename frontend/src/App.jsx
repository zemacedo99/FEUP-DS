import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Example from './pages/Example';
import HelpAboutUs from './pages/HelpAboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Example />} />
          <Route path="/help" exact element={<HelpAboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
