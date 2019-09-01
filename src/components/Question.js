import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Question extends Component {
  render() {
    const { question, answered } = this.props

    return (
      <div className='question'>
        <h4>{question.author.name} Asks:</h4>
        <figure><img width={50} src={question.author.avatarURL} alt={question.author.name} /></figure>
        <h5>Would you rather</h5>
        <p>{question.optionOne.text}</p>
        <p>{question.optionTwo.text}</p>
        <Link to={`/question/${question.id}`}>{answered ? 'See Result' : 'Answer the Poll'}</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users }, { id, answered }) => {
  const question = questions[id]

  return {
    question: {
      ...question,
      author: users[ question.author ]
    },
    answered
  }
}

export default connect(mapStateToProps)(Question)
