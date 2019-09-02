import { getInitialData } from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading-bar';


export const handeInitialData = () => {
  return (dispatch) => {

    dispatch(showLoading())

    return getInitialData()
      .then(({ questions, users }) => {
        dispatch( receiveUsers(users) )
        dispatch( receiveQuestions(questions) )
      })
      .then(() => dispatch(hideLoading()))
  }
}