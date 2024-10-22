import React, { useState } from 'react'
import { Container } from './StylesHeader'
import { FaBars } from 'react-icons/fa'
import Menu from '../Menu/Menu'
import Logo_bg from '../../images/Logo_bg.png'

const Header = () => {
  const [menu, setMenu] = useState(false)

  const showMenu = () => setMenu(!menu)

  return (
    <Container>
      <FaBars onClick={showMenu} />
      {menu && <Menu active={setMenu} />}
      <img src={Logo_bg }/>
    </Container>
  )
}

export default Header
