import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

// Estilos aprimorados
const StyledDiv = styled.div`
  position: relative;
  height: 100vh;
  background: linear-gradient(135deg, #e0f7fa 0%, #00f46a 100%);
  text-align: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Container = styled.div`
  background: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  width: 360px;
  padding: 40px 30px;
  box-sizing: border-box;
`;

const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 32px;
  color: #00796b;
  margin-bottom: 8px;
  font-weight: 700;
`;

const SubTitle = styled.h3`
  font-size: 18px;
  color: #555;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  height: 38px;
  padding: 0 12px;
  border: 2px solid #07eb97;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #5df193;
    box-shadow: 0 0 8px #358045;
  }
`;

const SendBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Submit = styled.input.attrs({ type: 'submit' })`
  width: 100%;
  height: 40px;
  background-color: #244429;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3fff86;
  }
`;

const LinkForgot = styled.div`
  font-size: 14px;
  color: #6cfd9f;
  cursor: pointer;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 600;
  text-align: left;
`;

// Componente Login
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    // Autenticação fictícia
    const user = {
      name: 'Ana',
      email: email,
    };

    navigate('/home', { state: { user } });
  };

  return (
    <StyledDiv>
      <Container>
        <BoxIcon>
          <Icon src={logo} alt="Logo Depen" />
        </BoxIcon>

        <Title>Autenticação</Title>
        <SubTitle>Informe suas Credenciais</SubTitle>

        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        {erro && <ErrorMessage>{erro}</ErrorMessage>}

        <SendBox>
          <Submit value="Autenticar" onClick={handleLogin} />
          
        </SendBox>
      </Container>
    </StyledDiv>
  );
};

export default Login;
