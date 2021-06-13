import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { StyledHeader, StyledFormWrapper } from './styled'
import MarvelLogo from '../../../assets/img/marvel-logo.png'
import { StyledInput } from '../../../styles/globalStyles'
import searchIcon from "../../../assets/img/loupe.svg"
import {
	searchCharactersAndComics,
} from '../../../reducers/characters/charactersSlice';

export const Header = () => {
	const [term, setTerm] = useState("")
	const dispatch = useDispatch();
	const location = useLocation();

	return (
		<StyledHeader>
			<Link to="/"><img src={MarvelLogo} alt="logo" /></Link>

			{location.pathname === "/" && (
				<StyledFormWrapper onSubmit={(e) => {
					e.preventDefault()
					dispatch(searchCharactersAndComics({
						character: term,
						comic: term,
					}))
				}}>
					<StyledInput placeholder="Search..." value={term} onChange={(e) => setTerm(e.target.value)} />
					<button type="submit">
						<img alt="search icon" src={searchIcon} />
					</button>
				</StyledFormWrapper>
			)}


		</StyledHeader>
	)
}