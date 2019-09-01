import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav({ authedUser }) {
  return (
    <div className='nav'>
      <NavLink to='/' exact activeClassName='active'>Home</NavLink>
      <NavLink to='/new' activeClassName='active'>New Question</NavLink>
      <NavLink to='/leaderboard' activeClassName='active'>leaderboard</NavLink>
      {authedUser === null
        ? <NavLink to='/login' activeClassName='active'>Login</NavLink>
        : (
          <Fragment>
            <NavLink to='/logout' activeClassName='active'>Logout</NavLink>
            <span><img width={30} src={authedUser.avatarURL} alt={authedUser.name} /> {authedUser.name}</span>
          </Fragment>
        )
      }
    </div>
  )
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser: authedUser && users[authedUser]
  }
}

export default connect(mapStateToProps)(Nav)