import api from '../../api'

export const getUserOptions = userId => async dispatch => {
  try {
    const options = await api.get(`/binaryOptions/${userId}`)
    dispatch({
      type:'GET_USER_OPTIONS',
      payload: options
    })
  } catch (err) {
    console.log('error is getUserOptions API call')
  }
}