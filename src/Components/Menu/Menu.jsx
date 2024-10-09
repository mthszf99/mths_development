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
    <Container data-active={active ? 'true' : 'false'}>
      <FaTimes onClick={closeMenu} />  
      <Content>
        <MenuItens Icon={FaHome} Text="Home" />
        <MenuItens Icon={FaChartBar} Text="Sobre" />
        <MenuItens Icon={FaUserAlt} Text="Contatos" />
      </Content>
    </Container>
  )
}

export default Menu