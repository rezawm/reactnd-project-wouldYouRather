import React, { Component } from 'react'
import Unanswered from './Unanswered'
import Answered from './Answered'

export default class Dashboard extends Component {
  state = {
    tab: 'unanswered'
  }

  handleTabChange = (e, tab) => {
    e.preventDefault()

    this.setState(() => ({
      tab
    }))
  }

  render() {
    return (
      <div>
        <ul className='tab'>
          <li><a href='#unanswered' className={this.state.tab==='unanswered' ? 'active' : ''} onClick={(e) => this.handleTabChange(e, 'unanswered')}>Unanswered Questions</a></li>
          <li><a href='#answered' className={this.state.tab==='answered' ? 'active' : ''} onClick={(e) => this.handleTabChange(e, 'answered')}>Answered Questions</a></li>
        </ul>
        <div className='tabBody'>
          {this.state.tab==='unanswered' && <Unanswered />}
          {this.state.tab==='answered' && <Answered />}
        </div>
      </div>
    )
  }
}
