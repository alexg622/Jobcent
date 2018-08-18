import { combineReducers } from 'redux'
import AuthReducer from './auth_reducer'
import ErrorsReducer from './errors_reducer'


export default combineReducers({
  auth: AuthReducer,
  errors: ErrorsReducer
})
