import React from "react";
import MarvelLogo from '../../../assets/img/logo-1.png'
import {StyledLoader} from "./styled"

export const Loader = () => {
    return (
        <StyledLoader>
            <img alt="loader icon" src={MarvelLogo} />
        </StyledLoader>
    )
}