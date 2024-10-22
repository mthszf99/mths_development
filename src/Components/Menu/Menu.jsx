import React from 'react'
import { Container, Content } from './StylesMenu'
import { Link } from 'react-router-dom'
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
        <Link to="/" style={{ textDecoration: 'none' }}><MenuItens Text="Home" /></Link>
        <Link to="/Sobre" style={{ textDecoration: 'none' }}><MenuItens Text="Sobre" /></Link>
        <Link to="/Contatos" style={{ textDecoration: 'none' }}><MenuItens Text="Contatos" /></Link>
      </Content>
    </Container>
  )
}

export default Menu