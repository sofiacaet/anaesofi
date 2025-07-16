// src/pages/Home.js
import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  :root {
    --primaria: #efbace;
    --secundaria: #f6f2f4;
    --escuro: #fc0585;
    --maisEscuro: #300b1c;
    --claro: #e2e8f0;
    --vidro: rgba(255, 255, 255, 0.5);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--escuro);
    color: var(--claro);
  }

  a {
    text-decoration: none;
    color: var(--claro);
  }
`;

const Particulas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.5;
  background:
    radial-gradient(circle at 10% 20%, var(--primaria) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, var(--secundaria) 0%, transparent 20%),
    var(--maisEscuro);
`;

const Navegacao = styled.nav`
  position: fixed;
  top: 0;
  background: rgba(252, 154, 208, 0.8);
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

const MenuLink = styled.a`
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

const Cabecalho = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  text-align: center;
`;

const flutuar = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;



const Nome = styled.h1`
  font-size: 3.5rem;
  color: var(--primaria);
  font-weight: bold;
  margin: 20px;
`;

const Subtitulo = styled.p`
  font-size: 1.5rem;
  color: var(--claro);
`;

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Particulas />
      <Navegacao>
        <Menu>
          <li><MenuLink href="#">Início</MenuLink></li>
          <li><MenuLink href="#">Sobre</MenuLink></li>
          <li><MenuLink href="#">Projetos</MenuLink></li>
          <li><MenuLink href="#">Contato</MenuLink></li>
        </Menu>
      </Navegacao>

      <Cabecalho>
        
        <Nome>Sofia Caetano</Nome>
        <Subtitulo>Aspirante a Desenvolvedora</Subtitulo>
      </Cabecalho>
    </>
  );
};

export default Home;
