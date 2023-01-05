import { createSlice } from "@reduxjs/toolkit";

export const pokeStatSlice = createSlice({
  name: "pokeStat",
  initialState: {
    stats: {
      hp: 0,
      atk: 0,
      def: 0,
      spAtk: 0,
      spDef: 0,
      spe: 0,
    },
  },
  reducers: {
    newReducer: () => {},
  },
});

export const { newReducer } = pokeStatSlice.actions;
export const selectPokeStat = (state) => state.pokeStat.stats;

export default pokeStatSlice.reducer;
