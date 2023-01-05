import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import searchReducer from "../features/search-bar/searchSlice";
import pokeStatReducer from "../features/pokeStats/pokeStatsSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  search: searchReducer,
  pokeStat: pokeStatReducer,
});

export default configureStore({
  reducer: rootReducer,
});
