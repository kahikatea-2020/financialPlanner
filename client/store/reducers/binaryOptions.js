const INITIAL_STATE = {
  all: [],
  selected: null,
  open: false,
  editOpen: false
}

export default (state = INITIAL_STATE, action) => {
  const {type, payload = null} = action
  console.log(payload);
  switch(type){
    case 'GET_USER_OPTIONS':
        return {...state, all: payload}
    case 'ADD_USER_OPTION':
        return {...state, all: [...state.all, payload]}
    case 'TOGGLE_ADD_OPTION_MODAL':
        return {...state, open: payload}
    case 'SET_SELECTED_OPTION':
        return {...state, selected: payload}
    case 'DELETE_USER_OPTION':
        let newArray = state.all.filter(option => option.id !== payload)
        console.log(newArray)
        return {...state, all: newArray }
    case 'EDIT_USER_OPTION':
        return {...state, all: state.all.map(option => {
          if(option.id === payload.id){
            return payload
          } else {
            return option
          }
        })}
    case 'TOGGLE_EDIT_OPTION_MODAL':
        return {...state, editOpen: payload}
    default:
      return state
  }
}