import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { StoreContextProvider } from './store/StoreProvider'

ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
