import styled from 'styled-components'

export const PageStyled = styled.div`
  height:inherit;
  width:inherit;  
  background-color: ${props => props.theme.colors.backgroundPrimary};
  box-shadow: ${props => props.theme.shadows.shadow1};

  padding-top:2.4rem;
  padding-bottom:2.4rem;

  @media ${props => props.theme.media.small} {
    padding-top:3.2rem;
    padding-bottom:3.2rem;
  }

  @media ${props => props.theme.media.large} {
    padding-top:4.8rem;
    padding-bottom:4.8rem;
  }
`
