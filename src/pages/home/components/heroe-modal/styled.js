import styled from 'styled-components'

export const StyledModalOverlay = styled.div`  
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000d1;
    display: flex;
    align-items: center;
    justify-content: center;
    display:none;
`
export const StyledModal = styled.div`
    max-width: 437px;
    width: 100%;
    height: 500px;
    border-radius: 8px;
    background: white;
    box-shadow: 0px 0px 3px 3px #212121;`