import React from "react";
import { StyledHeader } from './styled'
import MarvelLogo from '../../../assets/img/marvel-logo.png'
import { StyledInput } from '../../../styles/globalStyles'

export const Header = () => {
    return (
        <StyledHeader>
            <img src={MarvelLogo} alt="logo" />
            <StyledInput placeholder="Search..." />
        </StyledHeader>
    )
}