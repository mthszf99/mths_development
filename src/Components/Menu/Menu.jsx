import React from 'react'
import { Container, Content } from './StylesMenu'
import { 
  FaTimes, 
  FaHome, 
  FaUserAlt, 
  FaChartBar
} from 'react-icons/fa'

import MenuItens from '../MenuItens/MenuItens'

const Menu = ({ active }) => {

  const closeMenu = () => {
    active(false)
  }

  return (
    <Container menu={active}>
      <FaTimes onClick={closeMenu} />  
      <Content>
        <MenuItens Text="Home" />
        <MenuItens Text="Sobre" />
        <MenuItens Text="Contatos" />
      </Content>
    </Container>
  )
}

export default Menu