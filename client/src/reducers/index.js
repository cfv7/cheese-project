import * as actions from '../actions'

const initialState = {
  cheeses: []
}

export const cheesesReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_CHEESE_REQUEST) {
    return initialState
  }
  else if (action.type === actions.FETCH_CHEESE_SUCCESS) {
    return Object.assign({}, state, {
      cheeses: [...state.cheeses, action.cheeses]
    })
  }
  return state
}
