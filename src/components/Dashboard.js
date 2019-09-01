import React from 'react'
import Unanswered from './Unanswered'
import Answered from './Answered'
import { NavLink } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <ul className='tab'>
        <li><NavLink exact to="/" activeClassName='active'>Unanswered Questions</NavLink></li>
        <li><NavLink to="/answered" activeClassName='active'>Answered Questions</NavLink></li>
      </ul>
      <Unanswered />
      <Answered />
    </div>
  )
}
