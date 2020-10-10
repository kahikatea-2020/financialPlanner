import api from '../../api'

export const getUserOptions = userId => async dispatch => {
  try {
    const options = await api.get(`/binaryOptions/${userId}`)
    dispatch({
      type: 'GET_USER_OPTIONS',
      payload: options.data
    })
  } catch (err) {
    console.log('error is getUserOptions API call')
  }
}

export const addUserOptions = option => async dispatch => {
  try {
    const optionData = await api.post('/binaryOptions/', option)
    dispatch({
      type: 'ADD_USER_OPTION',
      payload: optionData.data
    })
  } catch (err) {
    console.log('error is addUserOptions API call')
  }
}

export const addOptionModal = (bool) => dispatch => {
  try {
    dispatch({
      type: 'TOGGLE_ADD_OPTION_MODAL',
      payload: bool
    })
  } catch (err) {
    console.log('error is addOptionModal action')
  }
}

export const setSelectedOption = (option) => dispatch => {
  try {
    dispatch({
      type: 'SET_SELECTED_OPTION',
      payload: option
    })
  } catch (err) {
    console.log('error is setSelectedOption action')
  }

}

export const deleteUserOption = id => dispatch => {
  try {
    api.delete(`/binaryOptions/${id}`)
    dispatch({
      type: 'DELETE_USER_OPTION',
      payload: id
    })
  } catch (err) {
    console.log('error is deleteUserOption API call')
  }
}

export const editUserOption = option => async dispatch => {

  console.log(option);
  try {
    api.put(`/binaryOptions/${option.id}`, option)
    dispatch({
      type: 'EDIT_USER_OPTION',
      payload: option
    })
  } catch (err) {
    console.log('error is editUserOption API call')
  }
}

export const editOptionModal = (bool) => dispatch => {
  try {
    dispatch({
      type: 'TOGGLE_EDIT_OPTION_MODAL',
      payload: bool
    })
  } catch (err) {
    console.log('error is editOptionModal action')
  }
}
