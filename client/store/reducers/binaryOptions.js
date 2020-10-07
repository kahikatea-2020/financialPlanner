const INITIAL_STATE = {
  allOptions: [],
  selectedOption: null
}

export default (state = INITIAL_STATE, action) => {
  const {type, payload = null} = action

  switch(type){
    case 'GET_USER_OPTIONS':
        return {...state, all: [...state.all, payload]}
  }
}