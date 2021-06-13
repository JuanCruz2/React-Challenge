import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCharacters } from "../../api/fetch-characters/"

const initialState = {
   list: [],
   loading: true,
};

export const fetchRandomCharacters = createAsyncThunk(
    'characters/fetchRandomCharacters',
    async () => {
        const charactersList = await fetchCharacters();
        const shuffled = charactersList.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 8);
    }
  );
  

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    extraReducers: {
        [fetchRandomCharacters.pending]: (state, action) => {
            state.loading = true
        },
        [fetchRandomCharacters.fulfilled]: (state, action) => {
            state.loading = false
            state.list = action.payload
        },
    },
})

export default charactersSlice.reducer;