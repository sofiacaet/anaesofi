import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Grafico from '../../components/grafico/Grafico';
import foto from './foto.png'; // Imagem de topo

const ImagemTopo = styled.img`
  width: 800px; /* Ajuste o tamanho como quiser */
  height: 200px;
  border-radius: 10px; /* Se quiser cantos arredondados */
  margin-bottom: 20px;
`;


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #f7f7f7ff;
  }
`;

const Particulas = styled.div``; // se tiver efeito de fundo, mantenha aqui

const CabecalhoMain = styled.main`
  min-height: 60vh;
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

const SecaoGraficos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
`;

const Home = () => {
  const dadosLivros = [
    { nome: 'Harry Potter', valor: 1300 },
    { nome: 'Acotar', valor: 800 },
    { nome: 'Devils Nigth', valor: 500 },
  ];

  const dadosAutores = [
    { nome: 'Penelope Douglas', valor: 900 },
    { nome: 'Jane Austen', valor: 670 },
    { nome: 'Ana Huang', valor: 450 },
  ];

  const dadosEditoras = [
    { nome: 'Editora Alfa', valor: 1500 },
    { nome: 'Editora Beta', valor: 1400 },
    { nome: 'Editora Gama', valor: 1200 },
  ];

  return (
    <>
      <GlobalStyle />
      <Particulas />
      <Cabecalho />
      <CabecalhoMain>
        <ImagemTopo src={foto} alt="Imagem topo" />
        <Nome>Gerenciamento de uma Livraria</Nome>
        <Subtitulo>Por: Ana Julia Viana e Sofia Caetano</Subtitulo>
      </CabecalhoMain>
      <SecaoGraficos>
        <Grafico titulo="Livros Mais Vendidos" dados={dadosLivros} cor="#29a372" />
        <Grafico titulo="Autores Mais Vendidos" dados={dadosAutores} cor="#12dc81" />
        <Grafico titulo="Editoras Mais Vendidas" dados={dadosEditoras} cor="#00ff04" />
      </SecaoGraficos>
    </>
  );
};

export default Home;
