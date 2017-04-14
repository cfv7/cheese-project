
export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST'
export const fetchCheeseRequest = () => ({
  type: FETCH_CHEESE_REQUEST,
  loading: true
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS'
export const fetchCheeseSuccess = (cheeses) => ({
  type: FETCH_CHEESE_SUCCESS,
  loading: false,
  error: null,
  cheeses
})


export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR'
export const fetchCheeseError = (err) => ({
  type: FETCH_CHEESE_ERROR,
  loading: false,
  error: err,
})

export const getCheeses = () => dispatch => {
  dispatch(fetchCheeseRequest())
  return fetch('/api/cheeses').then(cheeses => {
    return cheeses.json()
  })
  .then(data => {
      dispatch(fetchCheeseSuccess(data))
  })
  .catch(err => {
    console.error(err);
    dispatch(fetchCheeseError(err));
  });
}