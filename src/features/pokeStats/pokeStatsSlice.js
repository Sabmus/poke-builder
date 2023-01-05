import { createSlice } from "@reduxjs/toolkit";

export const pokeStatSlice = createSlice({
  name: "pokeStat",
  initialState: {
    maxEv: 510,
    stats: [
      {
        name: "hp",
        value: 0,
        iv: 0,
      },
      {
        name: "atk",
        value: 0,
        iv: 0,
      },
      {
        name: "def",
        value: 0,
        iv: 0,
      },
      {
        name: "spAtk",
        value: 0,
        iv: 0,
      },
      {
        name: "spDef",
        value: 0,
        iv: 0,
      },
      {
        name: "spe",
        value: 0,
        iv: 0,
      },
    ],
  },
  reducers: {
    modifyStat: (state, action) => {
      const { ev, statId } = action.payload;
      const _maxEv = state.maxEv + (state.stats[statId].value - ev);

      if (_maxEv < 0) {
        if (state.maxEv >= 4) {
          state.stats[statId].value = state.maxEv - (state.maxEv % 4);
          state.maxEv = state.maxEv % 4;
        }
      } else {
        state.maxEv = state.maxEv + (state.stats[statId].value - ev);
        state.stats[statId].value = ev;
      }
    },
    modifyIv: (state, action) => {
      const { iv, statId } = action.payload;
      state.stats[statId].iv = iv;
    },
  },
});

export const { modifyStat, modifyIv } = pokeStatSlice.actions;
export const selectPokeStat = (state) => state.pokeStat;

export default pokeStatSlice.reducer;
