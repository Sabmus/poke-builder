import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    pokeSearch: "",
  },
  reducers: {
    newSearch: (state, action) => {
      state.pokeSearch = action.payload;
    },
  },
});

export const { newSearch } = searchSlice.actions;
export const selectSearch = (state) => state.search.pokeSearch;

export default searchSlice.reducer;
