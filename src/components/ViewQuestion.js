import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/questions'


export class ViewQuestion extends Component {
  state = {
    vote: '',
  }

  handleChange = (e) => {
    const vote = e.target.value

    this.setState(() => ({
      vote,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch( handleQuestionAnswer({
      authedUser: this.props.authedUser,
      qid: this.props.question.id,
      answer: this.state.vote
    }) )
  }

  render() {
    const { question, answered, optionOne, optionTwo } = this.props

    if ( question === null ) {
      return (<div><h3>Bad Question!</h3></div>)
    }
    
    return (
      <Fragment>
        {answered
          ?
            <div className='question'>
              <h4>Asked by {question.author.name}</h4>
              <figure><img src={question.author.avatarURL} alt={question.author.name} /></figure>
              <h5>Results:</h5>
              <div className={optionOne.className}>
                <p>{question.optionOne.text}</p>
                <div className='bar'><span style={{width:optionOne.percentage+'%'}}>{optionOne.percentage!==0 && optionOne.percentage+'%'}</span></div>
                <i>{optionOne.length} out of {optionOne.length+optionTwo.length}</i>
              </div>
              <div className={optionTwo.className}>
                <p>{question.optionTwo.text}</p>
                <div className='bar'><span style={{width:optionTwo.percentage+'%'}}>{optionTwo.percentage!==0 && optionTwo.percentage+'%'}</span></div>
                <i>{optionTwo.length} out of {optionOne.length+optionTwo.length}</i>
              </div>
            </div>
          :
            <div className='question'>
              <h4>{question.author.name} Asks:</h4>
              <figure><img src={question.author.avatarURL} alt={question.author.name} /></figure>
              <form onSubmit={this.handleSubmit}>
                <h5>Would You Rather ...</h5>
                <label>
                  <input type="radio"
                    name="vote" value="optionOne"
                    onChange={this.handleChange}
                    checked={this.state.vote === 'optionOne'} />
                  {question.optionOne.text}
                </label>
                <label>
                  <input type="radio"
                    name="vote" value="optionTwo"
                    onChange={this.handleChange}
                    checked={this.state.vote === 'optionTwo'} />
                  {question.optionTwo.text}
                </label>
                <button type='submit'>Submit</button>
              </form>
            </div>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params
  const question = questions[id] ? questions[id] : null

  if( question === null ) {
    return {
      question
    }
  }

  const optionOne = question.optionOne.votes.length
  const optionTwo = question.optionTwo.votes.length

  return {
    question: {
      ...question,
      author: users[ question.author ]
    },
    authedUser,
    answered: Object.keys( users[ authedUser ].answers).includes( id ),
    optionOne: {
      length: optionOne,
      percentage: Math.round( optionOne*100/(optionOne+optionTwo) ),
      className: question.optionOne.votes.includes(authedUser) ? 'your-vote' : ''
    },
    optionTwo: {
      length: optionTwo,
      percentage: Math.round( optionTwo*100/(optionOne+optionTwo) ),
      className: question.optionTwo.votes.includes(authedUser) ? 'your-vote' : ''
    }
  }
}

export default connect(mapStateToProps)(ViewQuestion)
