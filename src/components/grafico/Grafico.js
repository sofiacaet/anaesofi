import React from 'react';
import { Chart } from 'react-google-charts';
import styled from 'styled-components';

const Container = styled.div`
  margin: 30px auto;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 16px;
  width: 90%;
  max-width: 800px;
`;

export default function Grafico({ titulo, dados, cor = '#2ea98e' }) {
  const data = [
    [titulo, 'Quantidade', { role: 'style' }],
    ...dados.map(item => [item.nome, item.valor, cor]),
  ];

  const options = {
    title: titulo,
    legend: { position: 'none' },
    hAxis: { slantedText: true },
  };

  return (
    <Container>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </Container>
  );
}
