import React from 'react';
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';

const Botao = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: blue;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default function BotaoInfo({ onClick }) {
  return (
    <Botao onClick={onClick} title="Informações">
      <FaInfoCircle />
    </Botao>
  );
}
