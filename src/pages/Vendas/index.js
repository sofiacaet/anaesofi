// src/pages/Vendas/index.js
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
  grid-template-columns: 1fr 1fr 1fr 1fr;  /* 4 colunas agora: data, valor, cliente, livros */
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
  height: 38px; /* mesma altura dos inputs */
`;

const SelectMultiple = styled.select`
  width: 100%;
  padding: 6px;
  border: 1px solid grey;
  background-color: #eee;
  border-radius: 6px;
  height: 100px;
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

export default function PaginaVendas() {
  const livrosDisponiveis = [
    { id: 1, titulo: 'Dom Casmurro' },
    { id: 2, titulo: 'O Pequeno Príncipe' },
    { id: 3, titulo: '1984' },
    { id: 4, titulo: 'A Menina que Roubava Livros' },
  ];

  const clientesDisponiveis = [
    { id: 1, nome: 'Maria Silva' },
    { id: 2, nome: 'João Souza' },
    { id: 3, nome: 'Ana Pereira' },
    { id: 4, nome: 'Carlos Oliveira' },
  ];

  const [vendas, setVendas] = useState([]);
  const [data, setData] = useState('');
  const [clienteSelecionado, setClienteSelecionado] = useState('');
  const [livrosVendidos, setLivrosVendidos] = useState([]);
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [vendaSelecionada, setVendaSelecionada] = useState(null);

  function salvarVenda() {
    if (!data || !clienteSelecionado || livrosVendidos.length === 0 || !valor) {
      alert('Preencha data, cliente, selecione ao menos um livro e informe o valor!');
      return;
    }

    const novaVenda = {
      id: vendas.length + 1,
      data,
      cliente: clientesDisponiveis.find(c => c.id === parseInt(clienteSelecionado)),
      livros: livrosDisponiveis.filter(l => livrosVendidos.includes(l.id)),
      valor: parseFloat(valor),
      descricao,
    };

    setVendas([...vendas, novaVenda]);
    setData('');
    setClienteSelecionado('');
    setLivrosVendidos([]);
    setValor('');
    setDescricao('');
  }

  function removerVenda(id) {
    setVendas(vendas.filter(v => v.id !== id));
  }

  function abrirDetalhes(venda) {
    setVendaSelecionada(venda);
  }

  function fecharDetalhes() {
    setVendaSelecionada(null);
  }

  function handleSelectLivrosChange(e) {
    const options = e.target.options;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) selected.push(parseInt(options[i].value));
    }
    setLivrosVendidos(selected);
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Formulario>
          <GridAuto>
            <div>
              <Label>Data da Venda</Label>
              <Input type="date" value={data} onChange={e => setData(e.target.value)} />
            </div>
            <div>
              <Label>Valor (R$)</Label>
              <Input
                type="number"
                min="0"
                step="0.01"
                value={valor}
                onChange={e => setValor(e.target.value)}
              />
            </div>
            <div>
              <Label>Cliente</Label>
              <Select value={clienteSelecionado} onChange={e => setClienteSelecionado(e.target.value)}>
                <option value="">-- Selecione um cliente --</option>
                {clientesDisponiveis.map(cliente => (
                  <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
                ))}
              </Select>
            </div>
            <div>
              <Label>Livros Vendidos</Label>
              <SelectMultiple multiple value={livrosVendidos.map(String)} onChange={handleSelectLivrosChange}>
                {livrosDisponiveis.map(livro => (
                  <option key={livro.id} value={livro.id}>{livro.titulo}</option>
                ))}
              </SelectMultiple>
            </div>
          </GridAuto>

          <GridConf>
            <div>
              <Label>Descrição</Label>
              <TextArea value={descricao} onChange={e => setDescricao(e.target.value)} />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
              <SaveButton onClick={salvarVenda}>
                <FaSave size={28} />
              </SaveButton>
            </div>
          </GridConf>
        </Formulario>

        <Titulo>Vendas Registradas</Titulo>
        <Tabela>
          <thead>
            <tr>
              <Th>DATA</Th>
              <Th>CLIENTE</Th>
              <Th>LIVROS</Th>
              <Th>VALOR (R$)</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {vendas.map((venda, i) => (
              <Linha key={venda.id} even={i % 2 === 0}>
                <Td>{venda.data}</Td>
                <Td>{venda.cliente.nome}</Td>
                <Td>{venda.livros.map(l => l.titulo).join(', ')}</Td>
                <Td>{venda.valor.toFixed(2)}</Td>
                <Acoes>
                  <Info onClick={() => abrirDetalhes(venda)} />
                  <BotaoAcao cor="red" onClick={() => removerVenda(venda.id)}>
                    <FaTrash />
                  </BotaoAcao>
                </Acoes>
              </Linha>
            ))}
          </tbody>
        </Tabela>

        {vendaSelecionada && (
          <Modal>
            <ModalBox>
              <TopoModal>
                <button onClick={fecharDetalhes} style={{ background: 'none', border: 'none' }}>
                  <FaTimesCircle size={24} color="red" />
                </button>
              </TopoModal>
              <InfoLinha><b>ID:</b> {vendaSelecionada.id}</InfoLinha>
              <InfoLinha><b>DATA:</b> {vendaSelecionada.data}</InfoLinha>
              <InfoLinha><b>CLIENTE:</b> {vendaSelecionada.cliente.nome}</InfoLinha>
              <InfoLinha><b>LIVROS:</b> {vendaSelecionada.livros.map(l => l.titulo).join(', ')}</InfoLinha>
              <InfoLinha><b>VALOR:</b> R$ {vendaSelecionada.valor.toFixed(2)}</InfoLinha>
              <InfoLinha><b>DESCRIÇÃO:</b> {vendaSelecionada.descricao}</InfoLinha>
            </ModalBox>
          </Modal>
        )}
      </Container>
    </>
  );
}
