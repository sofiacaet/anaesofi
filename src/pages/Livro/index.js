// src/pages/Livro/index.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSave, FaTrash, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Info from '../../components/info/Info';

const Container = styled.div`
  padding: 120px 20px 40px;
  max-width: 1000px;
  margin: 0 auto;
  color: #333;
`;

const Formulario = styled.div`
  border: 2px solid lightgray;
  box-shadow: 3px 3px 3px 2px darkgray;
  padding: 20px;
  margin-bottom: 40px;
  background-color: white;
`;

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

const GridConf = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 10px;
  margin-top: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px;
  border: 1px solid darkgrey;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 75px;
  padding: 6px;
  border: 1px solid darkgrey;
  border-radius: 6px;
`;

const Select = styled.select`
  width: 100%;
  padding: 6px;
  border: 1px solid grey;
  background-color: #eee;
  border-radius: 6px;
`;

const SaveButton = styled.button`
  background-color: green;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Titulo = styled.h2`
  color: whitesmoke;
  text-shadow: 2px 2px 4px #000000;
  font-size: 24px;
`;

const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid lightgray;
  box-shadow: 3px 3px 3px 2px darkgray;
  background-color: white;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
`;

const Linha = styled.tr`
  background-color: ${props => props.even ? 'lightgray' : 'white'};
`;

const Acoes = styled.td`
  display: flex;
  gap: 6px;
`;

const BotaoAcao = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: ${props => props.cor || 'gray'};

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 500px;
  box-shadow: 3px 3px 10px #000;
`;

const TopoModal = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const InfoLinha = styled.p`
  margin: 8px 0;
`;

export default function PaginaLivros() {
  const [livros, setLivros] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('Romance');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  function salvarLivro() {
    if (!titulo || !autor || !data || !preco) {
      alert('Preencha os campos Título, Autor, Data e Preço!');
      return;
    }

    const novoLivro = {
      id: livros.length + 1,
      titulo,
      autor,
      genero,
      data,
      descricao,
      preco: parseFloat(preco),
    };
    setLivros([...livros, novoLivro]);

    setTitulo('');
    setAutor('');
    setGenero('Romance');
    setData('');
    setDescricao('');
    setPreco('');
  }

  function removerLivro(id) {
    setLivros(livros.filter(livro => livro.id !== id));
  }

  function abrirDetalhes(livro) {
    setLivroSelecionado(livro);
  }

  function fecharDetalhes() {
    setLivroSelecionado(null);
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Formulario>
          <GridAuto>
            <div>
              <Label>Título</Label>
              <Input value={titulo} onChange={e => setTitulo(e.target.value)} />
            </div>
            <div>
              <Label>Data</Label>
              <Input type="date" value={data} onChange={e => setData(e.target.value)} />
            </div>
            <div>
              <Label>Gênero</Label>
              <Select value={genero} onChange={e => setGenero(e.target.value)}>
                <option>Romance</option>
                <option>Ficção</option>
                <option>Comédia</option>
                <option>Autoajuda</option>
                <option>Religião</option>
              </Select>
            </div>
            <div>
              <Label>Preço (R$)</Label>
              <Input
                type="number"
                min="0"
                step="0.01"
                value={preco}
                onChange={e => setPreco(e.target.value)}
                placeholder="0.00"
              />
            </div>
          </GridAuto>

          <GridConf>
            <div>
              <Label>Autor</Label>
              <Input value={autor} onChange={e => setAutor(e.target.value)} />
              <Label>Descrição</Label>
              <TextArea value={descricao} onChange={e => setDescricao(e.target.value)} />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
              <SaveButton onClick={salvarLivro}>
                <FaSave size={28} />
              </SaveButton>
            </div>
          </GridConf>
        </Formulario>

        <Titulo>Livros em Estoque</Titulo>
        <Tabela>
          <thead>
            <tr>
              <Th>TÍTULO</Th>
              <Th>DATA</Th>
              <Th>GÊNERO</Th>
              <Th>PREÇO (R$)</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, i) => (
              <Linha key={livro.id} even={i % 2 === 0}>
                <Td>{livro.titulo}</Td>
                <Td>{livro.data}</Td>
                <Td>{livro.genero}</Td>
                <Td>{livro.preco.toFixed(2)}</Td>
                <Acoes>
                  <Info onClick={() => abrirDetalhes(livro)} />
                  <BotaoAcao cor="red" onClick={() => removerLivro(livro.id)}>
                    <FaTrash />
                  </BotaoAcao>
                </Acoes>
              </Linha>
            ))}
          </tbody>
        </Tabela>

        {livroSelecionado && (
          <Modal>
            <ModalBox>
              <TopoModal>
                <button onClick={fecharDetalhes} style={{ background: 'none', border: 'none' }}>
                  <FaTimesCircle size={24} color="red" />
                </button>
              </TopoModal>
              <InfoLinha><b>ID:</b> {livroSelecionado.id}</InfoLinha>
              <InfoLinha><b>TÍTULO:</b> {livroSelecionado.titulo}</InfoLinha>
              <InfoLinha><b>AUTOR:</b> {livroSelecionado.autor}</InfoLinha>
              <InfoLinha><b>GÊNERO:</b> {livroSelecionado.genero}</InfoLinha>
              <InfoLinha><b>DATA:</b> {livroSelecionado.data}</InfoLinha>
              <InfoLinha><b>PREÇO:</b> R$ {livroSelecionado.preco.toFixed(2)}</InfoLinha>
              <InfoLinha><b>DESCRIÇÃO:</b> {livroSelecionado.descricao}</InfoLinha>
            </ModalBox>
          </Modal>
        )}
      </Container>
    </>
  );
}
