import { DATA_LOADING } from '../actions/loading'

export default function loading (state = null, action) {
  switch (action.type) {
    case DATA_LOADING :
      return true
    default :
      return state
  }
}