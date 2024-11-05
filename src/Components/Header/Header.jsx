import React, { useState, useEffect } from 'react';
import { Container, Backdrop } from './StylesHeader';
import { FaBars } from 'react-icons/fa';
import Menu from '../Menu/Menu';
import Logo_bg from '../../images/Logo_bg.png';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
    document.querySelector('.page-content').classList.toggle('menu-active', !menu);
  };

  const closeMenu = () => {
    setMenu(false);
    document.querySelector('.page-content').classList.remove('menu-active');
  };

  return (
    <Container>
      <FaBars onClick={showMenu} />
      {menu && <Backdrop onClick={closeMenu} />}
      <Menu active={menu} closeMenu={closeMenu} />
      <img src={Logo_bg} alt="Logo" />
    </Container>
  );
};

export default Header;
