import { getInitialData } from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { setDataLoaded } from './loading';

export const handeInitialData = () => {
  return (dispatch) => {
    return getInitialData()
      .then(({ questions, users }) => {
        dispatch( receiveUsers(users) )
        dispatch( receiveQuestions(questions) )
        dispatch( setDataLoaded(true) )
      })
  }
}