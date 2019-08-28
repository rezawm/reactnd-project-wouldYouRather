import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path='/' exact component={Dashboard} />
        <Route path='/new' component={NewQuestion} />
        <Route path='/leaderboard' component={Leaderboard} />
      </div>
    </Router>
  );
}

export default App;
