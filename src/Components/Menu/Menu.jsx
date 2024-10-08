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
    <Container Menu={active}>
      <FaTimes onClick={closeMenu} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaChartBar} Text="Sobre" />
        <SidebarItem Icon={FaUserAlt} Text="Contatos" />
      </Content>
    </Container>
  )
}

export default Menu