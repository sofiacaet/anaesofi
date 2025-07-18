// src/pages/Home.js
import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Cabecalho from '../../components/cabecalho/Cabecalho'; // importando o cabeçalho

const GlobalStyle = createGlobalStyle`
  /* ... seu estilo global ... */
`;

const Particulas = styled.div`
  /* ... seu estilo ... */  
`;

// outros styled components como Nome, Subtitulo, CabecalhoMain etc

const CabecalhoMain = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  text-align: center;
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
      <Cabecalho />  {/* aqui está o menu */}
      <CabecalhoMain>
        <Nome>Site Livros</Nome>
        <Subtitulo>Aspirante a Desenvolvedora</Subtitulo>
      </CabecalhoMain>
    </>
  );
};

export default Home;
