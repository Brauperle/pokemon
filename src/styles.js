/**
functions
**/

/**
mixins
**/

export const mixins = {
  calclineheight: rem => {
    const px = rem.split('rem')[0] * 10
    const lh = px * 1.4
    const lhrem = lh / 10
    return lhrem
  }
}

/**
variables
**/

export const breakpoints = {
  xs: '320',
  sm: '540',
  m: '720',
  lg: '960',
  xlg: '1140',
  xxlg: '1920'
}

const media = {
  xsmall: `(min-width: ${breakpoints.xs}px)`,
  xsmallOnly: `(max-width: ${breakpoints.xs - 1}px)`,
  small: `(min-width: ${breakpoints.sm}px)`,
  smallOnly: `(max-width: ${breakpoints.sm - 1}px)`,
  medium: `(min-width: ${breakpoints.m}px)`,
  mediumOnly: `(max-width: ${breakpoints.m - 1}px)`,
  large: `(min-width: ${breakpoints.lg}px)`,
  largeOnly: `(max-width: ${breakpoints.lg - 1}px)`,
  extraLarge: `(min-width: ${breakpoints.xlg}px)`
}

const typo = {
  typobase: '62.5%', /* =10px */
  typobody: '1.6rem',
  typotitle: '1.6rem',
  typobigtitle: '1.8rem',
  typotext: '1.3rem',
  typosubtext: '.9rem',
  typonormal: '400',
  typobold: '600'
}

const radius = {
  base: '.4rem',
  big: '.8rem'
}

const shared = {
  typo: typo,
  radius: radius,
  media: media,
  breakpoints: breakpoints
}

export const themeLight = {
  ...shared,
  colors: {
    highlight: '#3C5AA6',
    highlightSecondary: '#FFCB05',
    backgroundPrimary: '#f7fafb',
    backgroundSecondary: '#ffffff',
    backgroundTertiary: '#f7fafd',
    textPrimary: '#121c42',
    textSecondary: '#70768d',
    border: '#d5e3ec'
  },
  shadows: {
    shadow1: `0 7px 14px 0px rgba(50,50,93,.11), 
        0 3px 6px 0px rgba(0,0,0,.08), 
        0 -12px 36px -8px rgba(0,0,0,.01)`,
    shadow4: 'rgb(216, 225, 232) 0px 2px 4px 0px'
  }
}

export const themeDark = {
  ...shared,
  colors: {
    highlight: '#3C5AA6',
    highlightSecondary: '#FFCB05',
    backgroundPrimary: '#171933',
    backgroundSecondary: '#22244d',
    backgroundTertiary: '#1d1f42',
    textPrimary: '#d4dcff',
    textSecondary: '#8491c7',
    border: '#2a2e5e'
  },
  shadows: {
    shadow1: `0 7px 14px 0px rgba(50,50,93,.3), 
        0 3px 6px 0px rgba(0,0,0,.5), 
        0 -12px 36px -8px rgba(0,0,0,.5)`,
    shadow4: '0 2px 4px rgba(0,0,0,.2)'
  }
}

/**
Animation
**/
