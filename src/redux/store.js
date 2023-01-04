import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import searchReducer from "../features/search-bar/searchSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  search: searchReducer,
});

export default configureStore({
  reducer: rootReducer,
});
