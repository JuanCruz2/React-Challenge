import React from "react";
import { Header } from "./components/header"
import { HeroeCard } from "./components/heroe-card"
import { StyledWrapper } from "./styled"

export const Home = () => {
  return (
    <div>
      <Header></Header>
      <StyledWrapper>
        <HeroeCard></HeroeCard>
        <HeroeCard></HeroeCard>
        <HeroeCard></HeroeCard>
        <HeroeCard></HeroeCard>
        <HeroeCard></HeroeCard>
      </StyledWrapper>
    </div>
  )
}

