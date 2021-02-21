import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import Container from '../Container/Container'
import { StoreContext } from '../../store/StoreProvider'
import LogoUrl from '/logo.svg'

const Header = () => {
  const {
    state,
    dispatch,
    actions
  } = useContext(StoreContext)

  return (
    <Container padding={true}>
      <Link to="/">
        <img src={LogoUrl} />
      </Link>
      <select value={state.theme} onChange={e => {
        const t = e.target.options[e.target.selectedIndex].value
        dispatch({
          type: actions.UPDATE_THEME,
          payload: t
        })
      }}>
        <option value={'dark'}>Dark Theme</option>
        <option value={'light'}>Light Theme</option>
      </select>
    </Container>
  )
}

export default Header
