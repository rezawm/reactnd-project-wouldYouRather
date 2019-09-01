import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'


export class Unanswered extends Component {
  render() {
    const { questionIds } = this.props

    return (
      <div>
        {questionIds.map((id) => (
          <Question id={id} answered={false} key={id} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  const answeredQuestionIds = Object.keys( users[authedUser].answers )
  
  return {
    questionIds: Object.keys(questions).filter((qid) => 
      !answeredQuestionIds.includes(qid)
    )
  }
}

export default connect(mapStateToProps)(Unanswered)