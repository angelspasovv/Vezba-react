import {
    FETCH_CHARACHTERS_REQUEST,
    FETCH_CHARACHTERS_SUCCESS,
    FETCH_CHARACHTERS_FAILURE,
  } from "../actions/charachterDetailActions"
  
  const initialState = {
    loadingCharachter: false,
    charachter: [],
    error: "",
  }
  
  export const charachterDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CHARACHTERS_REQUEST:
        return {
          ...state,
          loadingCharachter: true,
        }
      case FETCH_CHARACHTERS_SUCCESS:
        return { ...state, loadingCharachter: false, charachter: action.payload, error: "" }
  
      case FETCH_CHARACHTERS_FAILURE:
        return { ...state, loadingCharachter: false, charachter: [], error: action.payload }
  
      default:
        return state
    }
  }
  
  export default charachterDetailReducer