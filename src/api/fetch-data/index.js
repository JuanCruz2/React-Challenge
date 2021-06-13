import { 
  GET_CHARACTERS_LIST, 
  GET_CHARACTERS_LIST_BY_NAME, 
  GET_COMICS_LIST_BY_NAME, 
  GET_COMICS_DETAILS_BY_ID,
  GET_CHARACTER_COMICS_BY_ID
} from "../constants"

export const fetchCharacters = async (name) => {
  const response = await fetch(name ? GET_CHARACTERS_LIST_BY_NAME(name) : GET_CHARACTERS_LIST);
  const data = await response.json();
  return data.data.results
}

export const fetchComics = async (name) => {
  const response = await fetch(GET_COMICS_LIST_BY_NAME(name));
  const data = await response.json();
  return data.data.results
}

export const fetchComicData = async (id) => {
  const response = await fetch(GET_COMICS_DETAILS_BY_ID(id));
  const data = await response.json();
  return data.data.results[0]
}

export const fetchCharactersComicsById = async (id) => {
  const response = await fetch(GET_CHARACTER_COMICS_BY_ID(id));
  const data = await response.json();
  return data.data.results
}
