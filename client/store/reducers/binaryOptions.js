const INITIAL_STATE = {
  all: [],
  selected: null
}

export default (state = INITIAL_STATE, action) => {
  const {type, payload = null} = action

  switch(type){
    case 'GET_USER_OPTIONS':
        return {...state, all: payload}
    case 'ADD_USER_OPTION':
        return {...state, all: [...state.all, payload]}
    default:
      return state
  }
}