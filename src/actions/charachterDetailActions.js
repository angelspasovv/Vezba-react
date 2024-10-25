import axios from "axios"

export const FETCH_CHARACHTERS_REQUEST = "FETCH_CHARACHTERS_REQUEST"
export const FETCH_CHARACHTERS_SUCCESS = "FETCH_CHARACHTERS_SUCCESS"
export const FETCH_CHARACHTERS_FAILURE = "FETCH_CHARACHTERS_FAILURE"


export const fetchCharachterRequest = () => ({ type: FETCH_CHARACHTERS_REQUEST })

export const fetchCharachterSuccess = (charachter) => ({
  type: FETCH_CHARACHTERS_SUCCESS,
  payload: charachter,
})

export const fetchCharachterFailure = (error) => ({
  type: FETCH_CHARACHTERS_FAILURE,
  payload: error,
})

const apiBaseUrl = "https://rickandmortyapi.com/api";

export const fetchCharachterDetails = (charachterId) => {
  return (dispatch) => {
    dispatch(fetchCharachterRequest())
    axios
      .get(`${apiBaseUrl}/character/${charachterId}`)
      .then((res) => {
        const charachter = res.data
        dispatch(fetchCharachterSuccess(charachter))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(fetchCharachterFailure(errorMsg))
      })
  }
}