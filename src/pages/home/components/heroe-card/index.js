import React from "react";
import EmptyStar from "../../../../assets/img/star-empty.svg"
import FilledStar from "../../../../assets/img/star.svg"
import {StyledCard, StyledCardHeader, StyledCardBody, StyledFavoriteWrapper, StyledCardContent} from "./styled"

export const HeroeCard = (props) => {
    return (
        <StyledCard >
            <StyledCardContent onClick={() => {
                if(props.onClick) {
                    props.onClick()
                }
            }}>
                <StyledCardHeader backgroundImage={props.image}/>
                
                <StyledCardBody>
                    <p>
                        {props.name}
                    </p>
                </StyledCardBody>
            </StyledCardContent>
            {!props.hideFavorites && (
                <StyledFavoriteWrapper onClick={props.onFavoriteClick}>
                    {props.isFavorite && (<img alt="favorite character selecter" src={FilledStar} />)}
                    {!props.isFavorite && (<img alt="select favorite character" src={EmptyStar} />)}
                </StyledFavoriteWrapper>
            )}
        </StyledCard>
    )
}