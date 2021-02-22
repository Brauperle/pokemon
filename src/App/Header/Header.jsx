import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import { StoreContext } from '../../store/StoreProvider'
import LogoUrl from '/logo.svg'
import { HeaderContainer, HeaderLogo, HeaderSelect } from './Header.styled'

const Header = () => {
  const {
    state,
    dispatch,
    actions
  } = useContext(StoreContext)

  return (
    <Container padding={true}>
      <HeaderContainer>
        <HeaderLogo>
          <Link to="/"><img src={LogoUrl} alt="Logo" /></Link>
        </HeaderLogo>

        <HeaderSelect value={state.theme} onChange={e => {
          const t = e.target.options[e.target.selectedIndex].value
          dispatch({
            type: actions.UPDATE_THEME,
            payload: t
          })
        }}>
          <option value={'dark'}>Dark Theme</option>
          <option value={'light'}>Light Theme</option>
        </HeaderSelect>

      </HeaderContainer>
    </Container>
  )
}

export default Header
