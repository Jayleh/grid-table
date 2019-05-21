import { combineReducers } from 'redux'
import sortingStateReducer from './sortingStateReducer'

export default combineReducers({
  sorting: sortingStateReducer,
})
