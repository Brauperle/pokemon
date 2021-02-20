import React from 'react'
import Container from '../Container/Container'

import LogoUrl from '/logo.svg'

const Header = () => {
  return (
    <Container padding={true}>
      <img src={LogoUrl} />
    </Container>
  )
}

export default Header
