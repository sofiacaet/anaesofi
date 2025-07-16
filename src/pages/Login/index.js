import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

// Estilos
const StyledDiv = styled.div`
  position: relative;
  height: 100vh;
  background-color: #f2f2f2;
  text-align: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const Container = styled.div`
  box-sizing: border-box;
  padding: 50px;
`;

const BoxIcon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  width: 90%;
  margin-top: 30px;
`;

const BoxItem = styled.div`
  text-align: center;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Icon = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 0px;
  margin-bottom: 10px;
`;

const StyledImg = styled.img`
  width: 14%;
  border-radius: 100%;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  
`;

const Title = styled.h1`
  font-size: 48px;
  color: #555;
  margin-bottom: 5px;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  color: #888;
  font-weight: 100;
  margin-bottom: 40px;
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
  color: #111;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  display: inline-block;
  width: 90%;
  height: 30px;
  border: 0px;
  border-left: 1px solid #888;
  border-bottom: 1px solid #888;
  border-radius: 3px;
  margin-bottom: 10px;
  padding-left: 10px;

  &:focus {
    outline: none;
    border: 1px solid #555;
    border-radius: 4px;
  }
`;

const SendBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  width: 90%;
  padding-bottom: 30px;
  border-bottom: 1px solid #555;
`;

const Submit = styled.input.attrs({ type: 'submit' })`
  box-sizing: border-box;
  width: 180px;
  height: 35px;
  background-color: lightseagreen;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 20px;
  border: 0px;
  cursor: grab;
`;

const LinkForgot = styled.div`
  text-decoration: none;
  cursor: grab;
  font-size: 18px;
  margin-top: 20px;
  color: #555;
  font-weight: 600;
  padding-top: 7px;

  &:hover {
    opacity: 0.6;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
  margin-top: 10px;
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
      <StyledImg src={logo} alt="Logo" />

      <Container>
        <BoxIcon>
          <div></div>
          <BoxItem>
            <Icon src={logo} alt="Logo Depen" />
          </BoxItem>
          <div></div>
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
          <LinkForgot onClick={() => navigate('/reset')}>
            Esqueceu sua senha?
          </LinkForgot>
        </SendBox>
      </Container>
    </StyledDiv>
  );
};

export default Login;
