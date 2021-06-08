import React from "react"
import {StyledPageLayout} from "./styled"
import {Header} from "../components/header"

export const PageLayout = (props) => {
    return (
        <StyledPageLayout>
            <Header></Header>
            {props.children}
        </StyledPageLayout>
    )
}