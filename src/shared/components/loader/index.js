import React from "react";
import MarvelLogo from '../../../assets/img/logo-loader.png'
import {StyledLoader} from "./styled"

export const Loader = () => {
    return (
        <StyledLoader>
            <img alt="loader icon" src={MarvelLogo} />
        </StyledLoader>
    )
}