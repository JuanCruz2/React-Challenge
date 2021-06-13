import styled from 'styled-components'

export const StyledCard = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  height: 250px;
  color: white;
`