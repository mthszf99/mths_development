import React, { useEffect } from 'react';
import { Container, Content } from './StylesMenu';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import MenuItens from '../MenuItens/MenuItens';

const Menu = ({ active, closeMenu }) => {
  const location = useLocation();

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <Container menu={active}>
      <FaTimes onClick={closeMenu} />
      <Content>
        <Link to="/" onClick={closeMenu} style={{ textDecoration: 'none' }}><MenuItens Text="Home" /></Link>
        <Link to="/Sobre" onClick={closeMenu} style={{ textDecoration: 'none' }}><MenuItens Text="Sobre" /></Link>
        <Link to="/Contatos" onClick={closeMenu} style={{ textDecoration: 'none' }}><MenuItens Text="Contatos" /></Link>
        <Link to="/Newsletter" onClick={closeMenu} style={{ textDecoration: 'none' }}><MenuItens Text="Newsletter" /></Link>
      </Content>
    </Container>
  );
};

export default Menu;
