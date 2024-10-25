import {
    SEARCH_CHARACHTER_REQUEST,
    SEARCH_CHARACHTER_SUCCESS,
    SEARCH_CHARACHTER_FAILURE,
} from "../actions/searchCharachter"; 
  
  const initialState = {
    loadingSearchResults: false,
    searchResults: [],
    error: "",
  }
  
  export const searchCharachtersReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_CHARACHTER_REQUEST:
        return {
          ...state,
          loadingSearchResults: true,
        }
      case SEARCH_CHARACHTER_SUCCESS:
        return {
          ...state,
          loadingSearchResults: false,
          searchResults: action.payload,
          error: "",
        }
  
      case SEARCH_CHARACHTER_FAILURE:
        return {
          ...state,
          loadingSearchResults: false,
          searchResults: [],
          error: action.payload,
        }
  
      default:
        return state
    }
  }
  
  export default searchCharachtersReducer