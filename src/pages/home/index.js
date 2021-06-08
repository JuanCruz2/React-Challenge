import React from "react";
import { HeroeCard } from "./components/heroe-card"
import { HeroeModal } from "./components/heroe-modal"
import { StyledWrapper } from "./styled"

export const HomePage = () => {
  return (
    <div>
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

