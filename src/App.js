import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard'; // Importa o componente real

// Vamos criar componentes de página temporários para testar as rotas
const Livros = () => <h2>Página de Livros</h2>;
const Emprestimos = () => <h2>Página de Empréstimos</h2>;
const Alunos = () => <h2>Página de Alunos</h2>;
const Relatorios = () => <h2>Página de Relatórios</h2>;
const Configuracoes = () => <h2>Página de Configurações</h2>;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para a Home, que não tem o menu lateral */}
        <Route path="/" element={<Home />} />

        {/* Rotas que usam o MainLayout (com a sidebar) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/emprestimos" element={<Emprestimos />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;