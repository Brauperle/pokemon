import styled from 'styled-components'

export const PageStyled = styled.div`
  height:inherit;
  width:inherit;  
  background-color: ${props => props.theme.colors.backgroundPrimary};
  box-shadow: ${props => props.theme.shadows.shadow1};
`
