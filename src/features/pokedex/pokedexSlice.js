import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const limitDataItems = 151;

const initialState = {
  pokemons: [],
  status: "idle",
  error: null,
};

export const fetchPokemonList = createAsyncThunk(
  "pokedex/fetchPokemonList",
  async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limitDataItems}`
    );
    return await response.json();
  }
);

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.status = "success";
        state.pokemons = action.payload.results;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const currentStatus = (state) => state.pokedex.status;
export const currentData = (state) => state.pokedex.pokemons;

export default pokedexSlice.reducer;
