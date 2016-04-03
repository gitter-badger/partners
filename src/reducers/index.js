const reducers = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CONTACT':
      return [
        ...state,
        {
          active: action.id
        }
      ]
    default:
      return state
  }
}

export default reducers;
