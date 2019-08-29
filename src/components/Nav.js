import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
      <NavLink to='/' exact activeClassName='active'>Home</NavLink>
      <NavLink to='/new' activeClassName='active'>New Question</NavLink>
      <NavLink to='/leaderboard' activeClassName='active'>leaderboard</NavLink>
    </div>
  )
}

export default Nav
