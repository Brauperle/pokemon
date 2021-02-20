import React from 'react'
import { ThemeProvider } from 'styled-components'

import NormalizeStyles from './globalResetStyles'
import BaseStyles from './globalBaseStyles'
import { themeLight, themeDark } from '../shared/styles'

import Page from './Page/Page'
import Header from './Header/Header'

const TEMP_THEME = 'dark'

const App = () => {
  return (
    <ThemeProvider theme={TEMP_THEME === 'dark' ? themeDark : themeLight}>
      <NormalizeStyles />
      <BaseStyles />
      <Page>
        <Header />
      </Page>
    </ThemeProvider>
  )
}

export default App
