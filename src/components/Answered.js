import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'


export class Answered extends Component {
  render() {
    const { questionIds } = this.props

    return (
      <div>
        {questionIds.map((id) =>
          <Question id={id} answered={true} key={id} />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    questionIds: Object.keys( users[authedUser].answers )
  }
}

export default connect(mapStateToProps)(Answered)
