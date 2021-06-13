import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCharacters, fetchComics } from "../../api/fetch-characters/"

const initialState = {
	charactersList: [],
	comicsList: [],
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


export const searchCharactersAndComics = createAsyncThunk(
	'characters/searchCharacters',
	async (term) => {
		const charactersList = await fetchCharacters(term);
		const comicsList = await fetchComics(term);
		return {charactersList, comicsList};
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
			state.charactersList = action.payload
		},
		[searchCharactersAndComics.pending]: (state, action) => {
			state.loading = true
		},
		[searchCharactersAndComics.fulfilled]: (state, action) => {
			state.loading = false
			state.charactersList = [...action.payload.charactersList]
			state.comicsList = [...action.payload.comicsList]
		},
	},
})

export default charactersSlice.reducer;