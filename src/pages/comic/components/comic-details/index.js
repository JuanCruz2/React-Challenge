import React from "react";
import {StyledComic, StyledComicImage, StyledComicDescriptionWrapper} from "./styled"

export const ComicDetails = () => {
   return (
        <StyledComic>
            <div>
                <StyledComicImage src="https://i.annihil.us/u/prod/marvel/i/mg/2/d0/5ce401142935b/clean.jpg" />
            </div>
            <StyledComicDescriptionWrapper>
                <h1>The Amazing Spiderman</h1>

                <p>
                    Published: May 29
                </p>
                <p>
                    Writter: Blabablabla
                </p>
                
                <p>descripcion</p>
            </StyledComicDescriptionWrapper>
        </StyledComic>
    )   
}