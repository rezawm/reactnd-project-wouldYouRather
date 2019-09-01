import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers } from './users'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question
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

export const handleAddQuestion = (question) => {
  return (dispatch) => {
    return saveQuestion(question)
      .then((question) => {
        dispatch( addQuestion(question) )
      })
  }
}