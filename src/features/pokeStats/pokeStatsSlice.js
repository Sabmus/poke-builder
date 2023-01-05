import { createSlice } from "@reduxjs/toolkit";

export const pokeStatSlice = createSlice({
  name: "pokeStat",
  initialState: {
    maxEv: 510,
    stats: [
      {
        name: "hp",
        value: 0,
      },
      {
        name: "atk",
        value: 0,
      },
      {
        name: "def",
        value: 0,
      },
      {
        name: "spAtk",
        value: 0,
      },
      {
        name: "spDef",
        value: 0,
      },
      {
        name: "spe",
        value: 0,
      },
    ],
  },
  reducers: {
    modifyStat: (state, action) => {
      const { ev, statId } = action.payload;

      state.maxEv = state.maxEv + (state.stats[statId].value - ev);
      state.stats[statId].value = ev;
    },
  },
});

export const { modifyStat } = pokeStatSlice.actions;
export const selectPokeStat = (state) => state.pokeStat;

export default pokeStatSlice.reducer;
