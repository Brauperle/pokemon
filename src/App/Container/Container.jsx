import React from 'react'
import PropTypes from 'prop-types'
import { ContainerStyled } from './Container.styled'

const Container = ({ children, padding }) => {
  return <ContainerStyled padding={padding}>{children}</ContainerStyled>
}

Container.propTypes = {
  children: PropTypes.any,
  padding: PropTypes.bool
}

export default Container
