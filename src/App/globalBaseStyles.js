import { createGlobalStyle } from 'styled-components'
import { mixins } from '../styles'
export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    background:${props => props.theme.colors.highlightSecondary};
    transition:background .3s;
    font-family: Arial, Helvetica, sans-serif;
    color: ${props => props.theme.colors.textPrimary}; 
    font-size: ${props => props.theme.typo.typobase};
    min-height:100vh;
    width:100%;
  }

  body {
    font-size: ${props => props.theme.typo.typobody};
    /* line-height: ${props => mixins.calclineheight(props.theme.typo.typobody)}; */
    line-height:1.2;
    padding: 0;
    margin: 0;
    height:inherit;
    width:inherit;
  }

  #root {
    height:inherit;
    width:inherit;    
  }

  a {
    color:${props => props.theme.colors.textPrimary};
    text-decoration:none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin:0;
  }
`
