import styled from 'styled-components'

export const ContainerStyled = styled.div`
  padding-left: ${props => (!props.theme.padding ? '0' : '1.6rem')};
  padding-right: ${props => (!props.theme.padding ? '0' : '1.6rem')};
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media ${props => props.theme.media.small} {
    padding-left: ${props => (!props.theme.padding ? '0' : '2.4rem')};
    padding-right: ${props => (!props.theme.padding ? '0' : '2.4rem')};
    
    max-width: ${props => props.theme.breakpoints.sm}px;
  }
  @media ${props => props.theme.media.medium} {
    max-width: ${props => props.theme.breakpoints.m}px;
  }
  @media ${props => props.theme.media.large} {
    max-width: ${props => props.theme.breakpoints.lg}px;
  }
  @media ${props => props.theme.media.extraLarge} {
    max-width: ${props => props.theme.breakpoints.xlg}px;
  }
`
