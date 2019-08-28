import React from 'react';
import Nav from './Nav'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  );
}

export default App;
