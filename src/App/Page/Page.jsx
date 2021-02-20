import React from 'react'
import { PageStyled } from './Page.styled'

const Page = (props) => {
  return (
    <PageStyled>
      {React.Children.map(props.children, Child => Child)}
    </PageStyled>
  )
}

export default Page
