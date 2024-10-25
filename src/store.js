import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk";
import charachtersReducer from "./reducers/charachterReducer"
import searchCharachersReducer from "./reducers/searchCharachtersReducer"
import favouriteCharachters from "./reducers/favoritesReducer"
import charachterDetailReducer from "./reducers/charachterDetailReducer";

const rootReducer = combineReducers({
  charachtersReducer,
  searchCharachersReducer,
  favouriteCharachters,
  charachterDetailReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))