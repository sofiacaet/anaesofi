// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Livro from './pages/Livro';
import Vendas from './pages/Vendas';
import Clientes from './pages/Clientes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/livro" element={<Livro />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/clientes" element={<Clientes />} />
        
      </Routes>
    </Router>
  );
}

export default App;
