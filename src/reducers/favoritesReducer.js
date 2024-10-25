import {
    ADD_FAVORITE,
    REMOVE_FAVORITE,
} from "../actions/favouriteCharachters"

const initialState = {
    favorites: [],
  };
  
  const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAVORITE:

        const isAlreadyFavorite = state.favorites.some(
          (char) => char.id === action.payload.id
        );
        if (isAlreadyFavorite) return state;
  
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
  
      case REMOVE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.filter(
            (char) => char.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default favoritesReducer;
  