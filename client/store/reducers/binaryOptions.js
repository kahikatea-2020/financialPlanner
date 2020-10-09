const INITIAL_STATE = {
  all: [],
  selected: null,
  open: false
}

export default (state = INITIAL_STATE, action) => {
  const {type, payload = null} = action

  switch(type){
    case 'GET_USER_OPTIONS':
        return {...state, all: payload}
    case 'ADD_USER_OPTION':
        return {...state, all: [...state.all, payload]}
    case 'TOGGLE_ADD_OPTION_MODAL':
        return {...state, open: payload}
    default:
      return state
  }
}