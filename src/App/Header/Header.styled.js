import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding-bottom:2.4rem;

  @media ${props => props.theme.media.small} {
    padding-bottom:3.2rem;
  }

  @media ${props => props.theme.media.large} {
    padding-bottom:4.8rem;
  }
`

export const HeaderLogo = styled.div`
  width : auto;
  height: 5rem;
  display: flex;
  align-items:center;
  justify-content:center;
  & a, & img {
    display:block;
    height: 5rem;
  }
  @media ${props => props.theme.media.small} {
    height: 7.5rem;
    & a, & img {
      height: 7.5rem;
    }
  }
  @media ${props => props.theme.media.large} {
    height: 10rem;
    & a, & img {
      height: 10rem;
    }
  } 
`

export const HeaderSelect = styled.select`
  position : fixed;
  bottom:.8rem;
  right:.8rem;
  z-index:1;
  font-size:1.2rem;
`
