import React, { useContext } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import { StoreContext } from '../store/StoreProvider'

import { themeLight, themeDark } from '../styles'
import NormalizeStyles from './globalResetStyles'
import BaseStyles from './globalBaseStyles'
import Page from './Page/Page'
import Header from './Header/Header'
import List from './List/List'
import Detail from './Detail/Detail'
import Search from './Search/Search'

const queryClient = new QueryClient()

const App = () => {
  const {
    state
  } = useContext(StoreContext)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={state.theme === 'dark' ? themeDark : themeLight}>
        <NormalizeStyles />
        <BaseStyles />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (
              <Page>
                <Header />
                <Search />
                <List />
              </Page>
            )} />
            <Route exact path="/:id" render={() => (
              <Page>
                <Header />
                <Detail />
              </Page>
            )} />
            <Route path="*" render={() => (
              <Page>
                <Header />
                Catch all
              </Page>
            )} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
