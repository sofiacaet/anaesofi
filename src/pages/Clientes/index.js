// src/pages/Clientes/index.js
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
  grid-template-columns: 2fr 3fr 2fr;
  gap: 10px;
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
  width: 450px;
  box-shadow: 3px 3px 10px #000;
`;

const TopoModal = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const InfoLinha = styled.p`
  margin: 8px 0;
`;

export default function PaginaClientes() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  function salvarCliente() {
    if (!nome || !email || !telefone) {
      alert('Preencha todos os campos!');
      return;
    }

    const novoCliente = {
      id: clientes.length + 1,
      nome,
      email,
      telefone,
    };

    setClientes([...clientes, novoCliente]);
    setNome('');
    setEmail('');
    setTelefone('');
  }

  function removerCliente(id) {
    setClientes(clientes.filter(c => c.id !== id));
  }

  function abrirDetalhes(cliente) {
    setClienteSelecionado(cliente);
  }

  function fecharDetalhes() {
    setClienteSelecionado(null);
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Formulario>
          <GridAuto>
            <div>
              <Label>Nome</Label>
              <Input value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <Label>Telefone</Label>
              <Input value={telefone} onChange={e => setTelefone(e.target.value)} />
            </div>
          </GridAuto>
          <div style={{ marginTop: 15, textAlign: 'right' }}>
            <SaveButton onClick={salvarCliente}>
              <FaSave size={28} />
            </SaveButton>
          </div>
        </Formulario>

        <Titulo>Clientes Cadastrados</Titulo>
        <Tabela>
          <thead>
            <tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>Telefone</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, i) => (
              <Linha key={cliente.id} even={i % 2 === 0}>
                <Td>{cliente.nome}</Td>
                <Td>{cliente.email}</Td>
                <Td>{cliente.telefone}</Td>
                <Acoes>
                  <Info onClick={() => abrirDetalhes(cliente)} />
                  <BotaoAcao cor="red" onClick={() => removerCliente(cliente.id)}>
                    <FaTrash />
                  </BotaoAcao>
                </Acoes>
              </Linha>
            ))}
          </tbody>
        </Tabela>

        {clienteSelecionado && (
          <Modal>
            <ModalBox>
              <TopoModal>
                <button onClick={fecharDetalhes} style={{ background: 'none', border: 'none' }}>
                  <FaTimesCircle size={24} color="red" />
                </button>
              </TopoModal>
              <InfoLinha><b>ID:</b> {clienteSelecionado.id}</InfoLinha>
              <InfoLinha><b>Nome:</b> {clienteSelecionado.nome}</InfoLinha>
              <InfoLinha><b>Email:</b> {clienteSelecionado.email}</InfoLinha>
              <InfoLinha><b>Telefone:</b> {clienteSelecionado.telefone}</InfoLinha>
            </ModalBox>
          </Modal>
        )}
      </Container>
    </>
  );
}
