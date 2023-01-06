import { configureStore, combineReducers } from "@reduxjs/toolkit";

import searchReducer from "../features/search-bar/searchSlice";
import pokeStatReducer from "../features/pokeStats/pokeStatsSlice";
import pokedexReducer from "../features/pokedex/pokedexSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  pokedex: pokedexReducer,
  pokeStat: pokeStatReducer,
});

export default configureStore({
  reducer: rootReducer,
});
