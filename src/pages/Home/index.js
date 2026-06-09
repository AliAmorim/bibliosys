import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link
import Card from '../../components/Card';
import './style.css';

// Importando os ícones que vamos usar (do pacote Material Design)
import { FcComboChart, FcReading, FcRefresh, FcReadingEbook, FcTemplate, FcSettings     } from "react-icons/fc";


function Home() {
  return (
    <div className="home-container">
      <div className="titulo-container">
        <h1>BiblioSys</h1>
        <p className="description">Sistema de Gerenciamento de Biblioteca Escolar</p>
        </div>
      <div className="cards-container">
        <Link to="/dashboard" className="card-link"><Card icon={<FcComboChart />} title="Dashboard" text="Visão geral com indicadores, gráfico de movimentação e empréstimos recentes" /></Link>
        <Link to="/livros" className="card-link"><Card icon={<FcReading />} title="Livros" text="Acervo completo com busca, filtros por categoria/status, cadastro e edição" /></Link>
        <Link to="/emprestimos" className="card-link"><Card icon={<FcRefresh />} title="Empréstimos" text="Controle de retiradas e devoluções com status, prazos e histórico" /></Link>
        <Link to="/alunos" className="card-link"><Card icon={<FcReadingEbook />} title="Alunos" text="Cadastro de Alunos, consulta de empréstimos ativos e histórico individual" /></Link>
        <Link to="/relatorios" className="card-link"><Card icon={<FcTemplate />} title="Relatórios" text="Gráficos, estatísticas e relatórios personalizados" /></Link>
        <Link to="/configuracoes" className="card-link"><Card icon={<FcSettings />} title="Configurações" text="Configure o sistema" /></Link>
      </div>
    </div>
  );
}

export default Home;