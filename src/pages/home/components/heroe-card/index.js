import React from "react";
import {StyledCard, StyledCardHeader, StyledCardBody} from "./styled"

export const HeroeCard = (props) => {
    return (
        <StyledCard >
        
            <StyledCardHeader backgroundImage={props.image}/>
                
            <StyledCardBody>
                <p>
                    {props.name}
                </p>
            </StyledCardBody>
        
        </StyledCard>
    )
}