import React from 'react'
import PropTypes from 'prop-types'
import { PageStyled } from './Page.styled'

const Page = (props) => {
  return (
    <PageStyled>
      {React.Children.map(props.children, Child => Child)}
    </PageStyled>
  )
}

Page.propTypes = {
  children: PropTypes.any
}

export default Page
