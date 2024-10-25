import axios from "axios"

export const FETCH_CHARACHTERS_REQUEST = "FETCH_CHARACHTERS_REQUEST"
export const FETCH_CHARACHTERS_SUCCESS = "FETCH_CHARACHTERS_SUCCESS"
export const FETCH_CHARACHTERS_FAILURE = "FETCH_CHARACHTERS_FAILURE"

export const fetchCharachtersRequest = () => ({ type: FETCH_CHARACHTERS_REQUEST })

export const fetchCharachtersSuccess = (charachters) => ({
  type: FETCH_CHARACHTERS_SUCCESS,
  payload: charachters,
})

export const fetchCharachtersFailure = (error) => ({
  type: FETCH_CHARACHTERS_FAILURE,
  payload: error,
})

const apiBaseUrl = "https://rickandmortyapi.com/api";

export const fetchCharachters = (page) => {
  return (dispatch) => {
    dispatch(fetchCharachtersRequest())
    axios
      .get(`${apiBaseUrl}/character/?page=${page}`)
      .then((res) => {
        const charachters = res.data.results
        dispatch(fetchCharachtersSuccess(charachters))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(fetchCharachtersFailure(errorMsg))
      })
  }
}