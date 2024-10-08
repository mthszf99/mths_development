import React from 'react'
import { Container } from './MenuItensStyles'

const MenuItens = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default MenuItens