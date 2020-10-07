import api from '../../api'

export const getUserOptions = userId => async dispatch => {
  try {
    const options = await api.get(`/binaryOptions/${userId}`)
    console.log(options.data);
    dispatch({
      type:'GET_USER_OPTIONS',
      payload: options.data
    })
  } catch (err) {
    console.log('error is getUserOptions API call')
  }
}