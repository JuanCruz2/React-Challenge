import { GET_CHARACTERS_LIST, GET_CHARACTERS_LIST_BY_NAME, GET_COMICS_LIST_BY_NAME } from "../constants"

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

