import api, { setTokenHeader } from '../../api'
import { SET_AUTH } from '../../types'

export const setAuth = (user) => ({
  type: SET_AUTH,
  payload: user
})

export const setAuthorizationToken = (token) => {
  setTokenHeader(token)
}

export const authUser = (user) => async (dispatch) => {
  try {
    const response = await api.post(`/auth/login`, user)
    const { token, ...userData } = response.data
    localStorage.setItem('jwtToken', token)
    setAuthorizationToken(token)
    dispatch(setAuth(userData))
    return response.status
  } catch (err) {
    throw new Error(err.response.data)
  }
}

export const newUser = (data) => async (dispatch) => {
  try {
    const response = await api.post(`/auth/register`, data)
    const { token, ...userData } = response.data
    console.log(userData);
    localStorage.setItem('jwtToken', token)
    setAuthorizationToken(token)
    dispatch(setAuth(userData))
    return response.status
  } catch (err) {
    throw new Error(err.response.data)
  }
}

export const logout = () => (dispatch) => {
  localStorage.clear()
  setAuthorizationToken(false)
  dispatch(setAuth({}))
}

export default {
  setAuth,
  setAuthorizationToken,
  authUser,
  logout
}
