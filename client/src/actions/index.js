
export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST'
export const fetchCheeseRequest = () => ({
  type: FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS'
export const fetchCheeseSuccess = (cheeses) => ({
  type: FETCH_CHEESE_SUCCESS,
  cheeses
})


export const getCheeses = () => dispatch => {
  dispatch(fetchCheeseRequest())
  return fetch('/api/cheeses').then(cheeses => {
    return cheeses.json()
  })
  .then(data => {
      console.log(data.cheeses)
      dispatch(fetchCheeseSuccess(data.cheeses))
  })
}