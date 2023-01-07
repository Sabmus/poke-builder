import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  status: "loading",
  error: null,
};

export const fetchPokemonData = createAsyncThunk(
  "pokemon/fetchData",
  async (pokeQ) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeQ}`);
    return await response.json();
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPokemonData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchPokemonData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const currentStatus = (state) => state.pokemon.status;
export const pokemonCurrentData = (state) => state.pokemon.data;

export default pokemonSlice.reducer;
