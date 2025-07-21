// src/components/Cabecalho.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navegacao = styled.nav`
  position: fixed;
  top: 0;
  background: rgba(156, 252, 154, 0.8);
  width: 100%;
  z-index: 100;
  padding: 1.5rem;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;
  justify-content: center;
`;

const MenuLink = styled(Link)`  /* Usando Link do react-router-dom */
  text-decoration: none;
  color: var(--claro);
  font-weight: 500;
  position: relative;
  padding: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primaria), var(--secundaria));
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Cabecalho = () => {
  return (
    <Navegacao>
      <Menu>
        <li><MenuLink to="/home">Início</MenuLink></li>
        <li><MenuLink to="/livro">Livro</MenuLink></li>
        <li><MenuLink to="/vendas">Vendas</MenuLink></li>
        <li><MenuLink to="/clientes">Clientes</MenuLink></li>
      </Menu>
    </Navegacao>
  );
};

export default Cabecalho;
