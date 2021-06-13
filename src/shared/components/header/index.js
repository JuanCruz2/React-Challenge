import React, {useState} from "react";
import { StyledHeader, StyledFormWrapper } from './styled'
import MarvelLogo from '../../../assets/img/marvel-logo.png'
import { StyledInput } from '../../../styles/globalStyles'
import searchIcon from "../../../assets/img/loupe.svg"
import { useSelector, useDispatch } from 'react-redux';
import {
    searchCharactersAndComics,
  } from '../../../reducers/characters/charactersSlice';
  
export const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch();

    return (
        <StyledHeader>
            <img src={MarvelLogo} alt="logo" />
            <StyledFormWrapper onSubmit={(e) => {
                e.preventDefault()
                dispatch(searchCharactersAndComics(term))
            }}>
                <StyledInput placeholder="Search..." value={term} onChange={(e) => setTerm(e.target.value)} />
                <button type="submit">
                    <img src={searchIcon}/>
                </button>
            </StyledFormWrapper>
        </StyledHeader>
    )
}