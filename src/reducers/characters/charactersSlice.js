import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    characters: []
};

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    extraReducers: {

        [fetchCharacters.fulfilled]: (state, action) => {
        },
    },
})