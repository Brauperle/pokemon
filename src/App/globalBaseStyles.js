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
    width:100vw;
  }

  body {
    font-size: ${props => props.theme.typo.typobody};
    line-height: ${mixins.calclineheight(props => props.theme.typo.typobody)};
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
    color:${props => props.theme.colors.highlight};
  }

  p {
    margin:0;
  }
`
