import api from '../../api'

export const getUserOptions = userId => async dispatch => {
  try {
    const options = await api.get(`/binaryOptions/${userId}`)
    dispatch({
      type:'GET_USER_OPTIONS',
      payload: options.data
    })
  } catch (err) {
    console.log('error is getUserOptions API call')
  }
}

export const addUserOptions = option => async dispatch => {
  try{
    const optionData = await api.post('/binaryOptions/', option)
    dispatch({
      type:'ADD_USER_OPTIONS',
      payload: optionData.data
    })
  } catch (err) {
    console.log('error is addUserOptions API call')
  }
}