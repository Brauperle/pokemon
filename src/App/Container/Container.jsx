import React from 'react'
import { ContainerStyled } from './Container.styled'

const Container = ({ children, padding }) => {
  return <ContainerStyled padding={padding}>{children}</ContainerStyled>
}

export default Container
