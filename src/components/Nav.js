import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <NavLink to='/' exact actionClassName='active'>Home</NavLink>
      <NavLink to='/new' actionClassName='active'>New Question</NavLink>
      <NavLink to='/leaderboard' actionClassName='active'>leaderboard</NavLink>
    </div>
  )
}

export default Nav
