import React from "react";
import {StyledCard} from "./styled"

export const HeroeCard = (props) => {
    console.log(props)
    return (
        <StyledCard>
            {props.name}
        </StyledCard>
    )
}