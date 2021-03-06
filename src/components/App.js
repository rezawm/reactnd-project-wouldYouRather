import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Login from './Login'
import Logout from "./Logout";
import ViewQuestion from './ViewQuestion'
import { connect } from 'react-redux'
import { handeInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'


class App extends Component {
  componentDidMount() {
    this.props.dispatch( handeInitialData() )
  }

  render () {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="app">
            <Nav />
            {this.props.authedUser === null
              ? <Login />
              : (
                <Fragment>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/new' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/login' component={Login} />
                  <Route path='/logout' component={Logout} />
                  <Route path='/question/:id' component={ViewQuestion} />
                </Fragment>
              )
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
