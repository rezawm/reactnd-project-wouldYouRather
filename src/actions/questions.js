import { saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from './users'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export const handleQuestionAnswer = (info) => {
  return (dispatch) => {
    return saveQuestionAnswer(info)
      .then(({ questions, users }) => {
        dispatch( receiveQuestions(questions) )
        dispatch( receiveUsers(users) )
      })
  }
}