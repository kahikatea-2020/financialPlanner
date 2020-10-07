import { combineReducers } from 'redux'
import auth from './auth'
import binaryOptions from './binaryOptions'
export default combineReducers({
  auth,
  binaryOptions
})