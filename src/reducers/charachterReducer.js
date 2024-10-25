import {
  FETCH_CHARACHTERS_REQUEST,
  FETCH_CHARACHTERS_SUCCESS,
  FETCH_CHARACHTERS_FAILURE,
} from "../actions/charachtersActions"

const initialState = {
    loadingCharachters: false,
    charachters: [],
    error: "",
  }
  
  export const charachtersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CHARACHTERS_REQUEST:
        return {
          ...state,
          loadingCharachters: true,
        }
      case FETCH_CHARACHTERS_SUCCESS:
        return {
          ...state,
          loadingCharachters: false,
          charachters: action.payload,
          error: "",
        }
  
      case FETCH_CHARACHTERS_FAILURE
      
      :
        return {
          ...state,
          loadingCharachters: false,
          charachters: [],
          error: action.payload,
        }
  
      default:
        return state
    }
  }
  
  export default charachtersReducer