import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState(() => ({
      [name]: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    const { authedUser } = this.props
    this.props.dispatch( handleAddQuestion({
      ...this.state,
      author: authedUser.id
    }) ).then(() => {
      this.props.history.push('/')
    })
    
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: ''
    }))
  }

  render () {
    const { authedUser } = this.props
    const { optionOneText, optionTwoText } = this.state

    return (
      <div className='question'>
        <h4>Create New Question</h4>
        <figure><img src={authedUser.avatarURL} alt={authedUser.name} /></figure>
        <h5>Would you rather ...</h5>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input className='txt' autoFocus name='optionOneText'
              value={this.state.optionOneText}
              onChange={this.handleChange} />
            </label>
          <i>----- Or -----</i>
          <label>
            <input className='txt' name='optionTwoText'
              value={this.state.optionTwoText}
              onChange={this.handleChange} />
            </label>
          <button disabled={optionOneText === '' || optionTwoText === '' } type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, users }, { history }) => {
  return {
    authedUser: users[authedUser],
    history
  }
}

export default connect(mapStateToProps)(NewQuestion)
