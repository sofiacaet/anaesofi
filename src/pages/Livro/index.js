
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSave, FaTrash, FaInfoCircle, FaTimesCircle } from 'react-icons/fa'; //ícones do FontAwesome
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Info from '../../components/info/Info';
import foto1 from './foto1.png';
import foto2 from './foto2.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 100%; 
`;

const ImagemLateral = styled.img`
  width: 160px;
  opacity: 0.7;
  z-index: 0;
`;

const Container = styled.div`
  padding: 100px 20px 40px;
  max-width: 1000px;
  margin: 0 auto;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Formulario = styled.div`
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 30px 30px 25px;
  margin-bottom: 50px;
  background-color: white;
`;

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.3fr 1.3fr;
  gap: 20px;

  @media(max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const GridConf = styled.div`
   display: grid;
  grid-template-columns: 1fr 60px;
  gap: 15px;
  margin-top: 20px;
  align-items: flex-end;

  @media(max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #71e7b2;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #04905a;
    box-shadow: 0 0 8px #04905a;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #71e7b2;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #04905a;
    box-shadow: 0 0 8px #04905a;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #71e7b2;
  background-color: #f0f7f7;
  border-radius: 10px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #04905a;
    box-shadow: 0 0 8px #04905a;
    background-color: white;
  }
`;

const SaveButton = styled.button`
  background-color: #04905a;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #10e291;
  }
`;

const Titulo = styled.h2`
  
 color: #04905a;
  font-size: 28px;
  margin-bottom: 15px;
  text-shadow: 1px 1px 2px #10e291;
  
`;

const Tabela = styled.table`
   width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  background-color: white;
`;

const Th = styled.th`
   padding: 12px 15px;
  text-align: left;
  background-color: #04905a;
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

const Td = styled.td`
 padding: 12px 15px;
  text-align: left;
  font-size: 15px;
  color: #444;
`;

const Linha = styled.tr`
  background-color: ${props => props.even ? '#f0f7f7' : 'white'};
  transition: background-color 0.3s;

  &:hover {
    background-color: #71e7b2;
  }
`;

const Acoes = styled.td`
   display: flex;
  gap: 12px;
  padding: 10px 15px;
`;

const BotaoAcao = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: ${props => props.cor || '#999'};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.85;
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
  z-index: 1000;
`;

const ModalBox = styled.div`
   background-color: white;
  padding: 30px 35px;
  border-radius: 14px;
  width: 480px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
`;

const TopoModal = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const InfoLinha = styled.p`
  margin: 10px 0;
  font-size: 16px;
  color: #333;
`;

export default function PaginaLivros() {
  const [livros, setLivros] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('Romance');
  const [data, setData] = useState('');
  const [editora, setEditora] = useState('');
  const [preco, setPreco] = useState('');
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [isbn, setIsbn] = useState('');


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
      editora,
      preco: parseFloat(preco),
      isbn,
    };
    setLivros([...livros, novoLivro]);

    setTitulo('');
    setAutor('');
    setGenero('Romance');
    setData('');
    setEditora('');
    setPreco('');
    setIsbn('');

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
      <Wrapper>
        <ImagemLateral src={foto1} alt="decoração esquerda" />
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
              <Label>Autor</Label>
              <Input value={autor} onChange={e => setAutor(e.target.value)} />
             
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

            <div>
              <Label>ISBN</Label>
              <Input
                value={isbn}
                onChange={e => setIsbn(e.target.value)}
                placeholder="123456"
              />
            </div>
          </GridAuto>
          

          <GridConf>
            <div> 
               <Label>Editora</Label>
              <TextArea value={editora} onChange={e => setEditora(e.target.value)} />
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
              <Th>AUTOR</Th>
              <Th>GÊNERO</Th>
              <Th>EDITORA</Th>
              <Th>ISBN</Th>
              <Th>DATA</Th>
              <Th>PREÇO(R$)</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, i) => (
              <Linha key={livro.id} even={i % 2 === 0}>
                
                <Td>{livro.titulo}</Td>
                <Td>{livro.autor}</Td>
                <Td>{livro.genero}</Td>
                 <Td>{livro.editora}</Td>
                <Td>{livro.isbn}</Td>
                <Td>{livro.data}</Td>
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
              <InfoLinha><b>TÍTULO:</b> {livroSelecionado.titulo}</InfoLinha>
              <InfoLinha><b>AUTOR:</b> {livroSelecionado.autor}</InfoLinha>
              <InfoLinha><b>GÊNERO:</b> {livroSelecionado.genero}</InfoLinha>
              <InfoLinha><b>DATA:</b> {livroSelecionado.data}</InfoLinha>
              <InfoLinha><b>PREÇO:</b> R$ {livroSelecionado.preco.toFixed(2)}</InfoLinha>
              <InfoLinha><b>ISBN:</b> {livroSelecionado.isbn}</InfoLinha>
              <InfoLinha><b>EDITORA:</b> {livroSelecionado.editora}</InfoLinha>
             

            </ModalBox>
          </Modal>
        )}
      </Container>
        <ImagemLateral src={foto2} alt="decoração direita" />
      </Wrapper>
      
    </>
  );
}
