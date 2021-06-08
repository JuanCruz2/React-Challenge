import React from "react";
import { Header } from "./components/header"
import { HeroeCard } from "./components/heroe-card"
import { HeroeModal } from "./components/heroe-modal"
import { StyledWrapper } from "./styled"

export const Home = () => {
  return (
    <div>
      <Header></Header>
      <StyledWrapper>
        <HeroeCard name="Spider-Man"></HeroeCard>
        <HeroeCard name="Hulk"></HeroeCard>
        <HeroeCard name="Venom"></HeroeCard>
        <HeroeCard name="Iron Man"></HeroeCard>
      </StyledWrapper>
      <HeroeModal></HeroeModal>
    </div>
  )
}

