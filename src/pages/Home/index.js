import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { createGlobalStyle } from 'styled-components';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Grafico from '../../components/grafico/Grafico';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from './foto1.png';
import foto2 from './foto2.png';
import foto3 from './foto3.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #f7f7f7ff;
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
      <Cabecalho />
      <Container className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '60vh', paddingTop: '100px' }}>
        <Nome>Gerenciamento de uma Livraria</Nome>
        <Subtitulo>Por: Ana Julia Viana e Sofia Caetano</Subtitulo>

        <Carousel style={{ width: '800px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
          <Carousel.Item>
            <img className="d-block w-100" src={foto1} alt="Primeira imagem" height="200" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={foto2} alt="Segunda imagem" height="200" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={foto3} alt="Terceira imagem" height="200" />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="pb-5">
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <Grafico titulo="Livros Mais Vendidos" dados={dadosLivros} cor="#29a372" />
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <Grafico titulo="Autores Mais Vendidos" dados={dadosAutores} cor="#12dc81" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Grafico titulo="Editoras Mais Vendidas" dados={dadosEditoras} cor="#00ff04" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
