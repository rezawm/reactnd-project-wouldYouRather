import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props) {
  console.log('nav', props)
  return (
    <div className='nav'>
      <NavLink to='/' exact activeClassName='active'>Home</NavLink>
      <NavLink to='/new' activeClassName='active'>New Question</NavLink>
      <NavLink to='/leaderboard' activeClassName='active'>leaderboard</NavLink>
      {props.authedUser === null
        ? <NavLink to='/login' activeClassName='active'>Login</NavLink>
        : (
          <Fragment>
            <NavLink to='/logout' activeClassName='active'>Logout</NavLink>
            <span>Welcome <b>{props.authedUser}</b></span>
          </Fragment>
        )
      }
    </div>
  )
}

export default connect(({authedUser, users}) => ({authedUser: authedUser !== null ? users[authedUser].name : null}))(Nav)
