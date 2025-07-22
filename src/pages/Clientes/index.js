// src/pages/Clientes/index.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSave, FaTrash, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Info from '../../components/info/Info';

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
  grid-template-columns: 5fr 3fr 1fr;
  gap: 10px;

  @media(max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr 1fr;
  gap: 10px;
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

export default function PaginaClientes() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  function salvarCliente() {
    if (!nome || !email || !telefone || !cpf) {
      alert('Preencha todos os campos!');
      return;
    }

    const novoCliente = {
      id: clientes.length + 1,
      nome,
      email,
      telefone,
      cpf,
    };

    setClientes([...clientes, novoCliente]);
    setNome('');
    setEmail('');
    setTelefone('');
    setCpf('');
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
              <Input type="email" value={email} 
              onChange={e => setEmail(e.target.value)}
              placeholder="email@example.com" 
              />
            </div>
            
            
          </GridAuto>
          <Grid2>
            <div>
              <Label>Telefone</Label>
              <Input value={telefone} 
              onChange={e => setTelefone(e.target.value)} 
              placeholder="(00) 00000-0000"
              />
            </div>
            <div  >
              <Label>CPF</Label>
              <Input value={cpf} 
              onChange={e => setCpf(e.target.value)} 
              placeholder="000.000.000-00" 
              />
             
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <SaveButton onClick={salvarCliente}>
              <FaSave size={28} />
            </SaveButton>
            </div>
         
          </Grid2>
          
        </Formulario>

        <Titulo>Clientes Cadastrados</Titulo>
        <Tabela>
          <thead>
            <tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>Telefone</Th>
              <Th>CPF</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, i) => (
              <Linha key={cliente.id} even={i % 2 === 0}>
                <Td>{cliente.nome}</Td>
                <Td>{cliente.email}</Td>
                <Td>{cliente.telefone}</Td>
                <Td>{cliente.cpf}</Td>
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
              <InfoLinha><b>CPF:</b> {clienteSelecionado.cpf}</InfoLinha>
            </ModalBox>
          </Modal>
        )}
      </Container>
    </>
  );
}
