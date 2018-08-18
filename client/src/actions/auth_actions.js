import axios from 'axios'
import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS } from './types'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/set_auth_token'

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const loginUser = userData => dispatch => (
  axios
    .post('/api/users/login', userData)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      setAuthToken(token)
      const decoded = jwt_decode(token) // stores user data and issue at
      // set current user
      dispatch(setCurrentUser(decoded))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
)
