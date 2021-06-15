import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCharacters, fetchComics, fetchCharactersComicsById } from "../../api/fetch-data/"

const initialState = {
	charactersList: [],
	comicsList: [],
	selectedCharacter: {},
	favoritesCharacters: localStorage.getItem("favoritesCharacters") ? 
	JSON.parse(localStorage.getItem("favoritesCharacters")) : [],
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
	async (searchTerm) => {
		const charactersList = searchTerm.character ? await fetchCharacters(searchTerm.character) : [];
		const comicsList = searchTerm.comic ? await fetchComics(searchTerm.comic) : [];

		return {charactersList, comicsList};
	}
);

export const fetchCharacterComics = createAsyncThunk(
	'characters/fetchCharacterComics',
	async (character) => {
		const characterData = await fetchCharactersComicsById(character.id);

		return characterData;
	}
);

export const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
    updateFavoriteList: (state, action) => {
			let newFavoritesList = []
			if(state.favoritesCharacters.find((favoriteCharacter) => favoriteCharacter.id === action.payload.id)) {
				newFavoritesList = state.favoritesCharacters.filter((favoriteCharacter) => {
					return favoriteCharacter.id !== action.payload.id
				})
			} else {
				newFavoritesList = [
					...state.favoritesCharacters,
					action.payload,
				]
			}

			state.favoritesCharacters = newFavoritesList
			localStorage.setItem("favoritesCharacters", JSON.stringify(newFavoritesList))
    },
  },
	extraReducers: {
		[fetchRandomCharacters.pending]: (state, action) => {
			state.loading = true
			state.charactersList = []
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
		[fetchCharacterComics.pending]: (state, action) => {
			state.loading = true
			state.selectedCharacter = {
				...action.meta.arg,
			}
		},
		[fetchCharacterComics.fulfilled]: (state, action) => {
			state.loading = false
			state.selectedCharacter = {
				...state.selectedCharacter,
				comicsList: action.payload
			}
		},
	},
})

export const { updateFavoriteList } = charactersSlice.actions;

export default charactersSlice.reducer;