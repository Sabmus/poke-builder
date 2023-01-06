import { createSlice } from "@reduxjs/toolkit";

const initState = {
  maxEv: 510,
  pokeLvl: 100,
  stats: [
    {
      name: "hp",
      ev: 0,
      iv: 31,
    },
    {
      name: "atk",
      ev: 0,
      iv: 31,
      nature: 1.0,
    },
    {
      name: "def",
      ev: 0,
      iv: 31,
      nature: 1.0,
    },
    {
      name: "spAtk",
      ev: 0,
      iv: 31,
      nature: 1.0,
    },
    {
      name: "spDef",
      ev: 0,
      iv: 31,
      nature: 1.0,
    },
    {
      name: "spe",
      ev: 0,
      iv: 31,
      nature: 1.0,
    },
  ],
};

export const pokeStatSlice = createSlice({
  name: "pokeStat",
  initialState: initState,
  reducers: {
    modifyStat: (state, action) => {
      const { ev, statId } = action.payload;
      const _maxEv = state.maxEv + (state.stats[statId].ev - ev);

      if (_maxEv < 0) {
        if (state.maxEv >= 4) {
          state.stats[statId].ev = state.maxEv - (state.maxEv % 4);
          state.maxEv = state.maxEv % 4;
        }
      } else {
        state.maxEv = state.maxEv + (state.stats[statId].ev - ev);
        state.stats[statId].ev = ev;
      }
    },
    modifyIv: (state, action) => {
      const { iv, statId } = action.payload;
      state.stats[statId].iv = iv;
    },
    modifyLvl: (state, action) => {
      state.pokeLvl = action.payload;
    },
    modifyNature: (state, action) => {
      const { natureMultiplier, statId } = action.payload;
      state.stats[statId].nature = natureMultiplier;
    },
    resetState: (state) => {
      state.maxEv = initState.maxEv;
      state.pokeLvl = initState.pokeLvl;
      state.stats = initState.stats;
    },
  },
});

export const { modifyStat, modifyIv, modifyLvl, modifyNature, resetState } =
  pokeStatSlice.actions;
export const selectPokeStat = (state) => state.pokeStat;

export default pokeStatSlice.reducer;
