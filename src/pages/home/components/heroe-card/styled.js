import styled from 'styled-components'


export const StyledCardHeader = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 180px;
`

export const StyledCardBody = styled.div`
  position: relative;
  overflow: hidden;
  padding: 16px 10px 17px;
  background: #151515;
  color: white;
  height: 145px;
  z-index: 30;

  p {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 0;
    text-decoration: none;
  }

  &::before {
    background: #e62429;
    bottom: 100%;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    transition-timing-function: cubic-bezier(.75,0,.125,1);
    transition: transform .3s,-webkit-transform .3s;
    width: 100%;
    z-index: -1;
  }

  &::after {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: #fff;
    border-style: solid;
    border-top-color: transparent;
    border-width: 12px 12px 0 0;
    bottom: 0;
    content: "";
    position: absolute;
    right: 0;
    top: auto;
    z-index: 40;
  }


`

export const StyledCard = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    ${StyledCardBody} {
      &::before {
        content: "";
        transform: translate3d(0,100%,0);
      }
    }
   
  }
`

export const StyledFavoriteWrapper = styled.div`
  position: absolute;
  background: white;
  padding: 4px 6px;
  border-radius: 6px;
  bottom: 12px;
  left: 12px;
  z-index: 35;
  img {
    width: 20px;
  }

  &:hover {
    opacity: .5;
  }
`

export const StyledCardContent = styled.div`
  position: relative;
`