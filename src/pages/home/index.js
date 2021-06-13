import React, { useEffect, useState } from "react";
import { HeroeCard } from "./components/heroe-card"
import { HeroeModal } from "./components/heroe-modal"
import { StyledWrapper, StyledTabItem, StyledTabsWrapper } from "./styled"
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRandomCharacters, 
  searchCharactersAndComics, 
  fetchCharacterComics, 
} from '../../reducers/characters/charactersSlice';
import { Link } from "react-router-dom";

import { Loader } from "../../shared/components/loader"

export const HomePage = (props) => {
  const [activeView, setActiveView] = useState("characters")
  const [openModal, setOpenModal] = useState(false)
  const reducerState = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if(params.character || params.comic) {
      dispatch(searchCharactersAndComics({
        character: params.character, 
        comic: params.comic
      }))
    } else {
      dispatch(fetchRandomCharacters())
    }
  }, [dispatch])

  return (
    <div>
      {!reducerState.loading && (
        <StyledTabsWrapper>
          <StyledTabItem 
            onClick={() => setActiveView("characters")}
            isActive={activeView === "characters"}
          >
            CHARACTERS ({reducerState.charactersList.length})
          </StyledTabItem>
          |
          <StyledTabItem 
            onClick={() => setActiveView("comics")}
            isActive={activeView === "comics"}
          >
            COMICS ({reducerState.comicsList.length})
          </StyledTabItem>
        </StyledTabsWrapper>
      )}
      <StyledWrapper>
        {reducerState.loading && (
          <Loader />
        )}

        {activeView === "characters" && (
          reducerState.charactersList.map((character) => {
            return (
              <HeroeCard
                key={character.id}
                name={character.name}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                onClick={() => {
                  dispatch(fetchCharacterComics(character))
                  setOpenModal(true)
                }}
              />
            )
          })
        )}

        {activeView === "comics" && (
          reducerState.comicsList.map((comic) => {
            return (
              <Link to={`/comic/${comic.id}`}>
                <HeroeCard
                  key={comic.id}
                  name={comic.title}
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
              </Link>
            )
          })
        )}
      </StyledWrapper>
        {openModal && (
          <HeroeModal 
            heroeData={reducerState.selectedCharacter}
            onClose={() => {
              setOpenModal(false)
            }}
          />
        )}
    </div>
  )
}

