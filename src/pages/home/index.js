import React from "react";
import { StyledHeader } from './styled'
import MarvelLogo from '../../assets/img/marvel-logo.png'
import { StyledInput } from '../../styles/globalStyles'

export const Home = () => {
  return (
    <div>
      <StyledHeader>
        <img src={MarvelLogo} />
        <StyledInput  placeholder="Search..." />
      </StyledHeader>
    </div>
  )
}