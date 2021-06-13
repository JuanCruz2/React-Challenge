import styled from 'styled-components'

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-column-gap: 10px; 
    grid-row-gap: 10px;
    padding: 12px;
    max-width: 1100px;
    width: 100%;
    margin: auto;
    box-sizing: border-box;
    
    @media(max-width: 800px) {
        grid-template-columns: repeat(2,1fr);
        padding: 12px 24px;
    }

    @media(max-width: 500px) {
        grid-template-columns: 1fr;
        padding: 12px 32px;
    }
`