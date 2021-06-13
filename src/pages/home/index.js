import React, { useEffect } from "react";
import { HeroeCard } from "./components/heroe-card"
import { HeroeModal } from "./components/heroe-modal"
import { StyledWrapper } from "./styled"
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRandomCharacters,
} from '../../reducers/characters/charactersSlice';
import { Loader } from "../../shared/components/loader"
export const HomePage = () => {
  const reducerState = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomCharacters())
  }, [dispatch])

  return (
    <div>
      <StyledWrapper>
        {reducerState.loading && (
          <Loader />
        )}
        
        {reducerState.list.map((character) => {
          return (  
            <HeroeCard 
              key={character.id} 
              name={character.name} 
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
            />
          )
        })}
      </StyledWrapper>
      <HeroeModal></HeroeModal>
    </div>
  )
}

