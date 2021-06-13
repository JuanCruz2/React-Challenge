import React from "react";
import {StyledCard} from "./styled"

export const HeroeCard = (props) => {
    return (
        <StyledCard backgroundImage={props.image}>
            {props.name}
        </StyledCard>
    )
}