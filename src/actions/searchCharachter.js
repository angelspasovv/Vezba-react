import axios from "axios"

export const SEARCH_CHARACHTER_REQUEST = "SEARCH_CHARACHTER_REQUEST"
export const SEARCH_CHARACHTER_SUCCESS = "SEARCH_CHARACHTER_SUCCESS"
export const SEARCH_CHARACHTER_FAILURE = "SEARCH_CHARACHTER_FAILURE"

export const searchCharachterRequest = () => ({ type: SEARCH_CHARACHTER_REQUEST })

export const searchCharachterSucces = (charachter) => ({
  type: SEARCH_CHARACHTER_SUCCESS,
  payload: charachter,
})

export const searchCharachterFailure = (error) => ({
  type: SEARCH_CHARACHTER_FAILURE,
  payload: error,
})

export const searchCharachterDetails = (searchedTerm) => {
  return (dispatch) => {
    dispatch(searchCharachterRequest())
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchedTerm}`)
      .then((res) => {
        const charachter = res.data.results
        dispatch(searchCharachterSucces(charachter))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(searchCharachterFailure(errorMsg))
      })
  }
}