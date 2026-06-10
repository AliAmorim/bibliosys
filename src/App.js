import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard'; // Importa o componente real
import Livros from './pages/Livros/Livros'; // Importa o componente real
import Emprestimos from './pages/Emprestimos/Emprestimos'; // Importa o componente real
import Alunos from './pages/Alunos/Alunos'; // Importa o componente real
import Relatorios from './pages/Relatorios/Relatorios'; // Importa o componente real
// Vamos criar componentes de página temporários para testar as rotas
import Configuracoes from './pages/Configuracoes/Configuracoes'; // Importa o componente real


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