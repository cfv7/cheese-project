import * as actions from '../actions'

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export const cheesesReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_CHEESE_REQUEST) {
    return Object.assign({}, state, {loading: action.loading})
  }
  else if (action.type === actions.FETCH_CHEESE_SUCCESS) {
    return Object.assign({}, state, {
      cheeses: [...state.cheeses, ...action.cheeses],
      loading: action.loading,
      error: action.error
    })
  }
  else if (action.type === actions.FETCH_CHEESE_ERROR) {
    return Object.assign({}, state, {
      loading: action.loading,
      error: action.error
    });
  }
  return state
}
