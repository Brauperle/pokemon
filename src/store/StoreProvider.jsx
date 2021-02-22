import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

export const INITIAL_STATE = {
  theme: 'dark',
  toasts: []
}

export const ACTION_TYPES = {
  UPDATE_THEME: 'UPDATE_THEME',
  UPDATE_TOASTS: 'UPDATE_TOASTS'
}

const StoreContext = React.createContext(null)
const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state = INITIAL_STATE, action) => {
    switch (action.type) {
      case (ACTION_TYPES.UPDATE_THEME) : {
        return { ...state, theme: action.payload }
      }
      case (ACTION_TYPES.UPDATE_TOASTS) : {
        return { ...state, toasts: action.payload }
      }
      default : throw new Error('UNEXPECTED ACTION')
    }
  }, INITIAL_STATE)

  return (<StoreContext.Provider value={{ state, dispatch, actions: ACTION_TYPES }}>{children}</StoreContext.Provider>)
}

StoreContextProvider.propTypes = {
  children: PropTypes.any
}

export { StoreContext, StoreContextProvider }
