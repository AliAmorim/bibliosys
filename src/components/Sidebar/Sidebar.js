import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // 

// Importando os mesmos ícones que usamos nos cards
import { FcComboChart, FcReading, FcRefresh, FcReadingEbook, FcTemplate, FcSettings, FcHome    } from "react-icons/fc";
function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h3>BiblioSys</h3>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/"><FcHome /> Home</Link></li>
        <li><Link to="/dashboard"><FcComboChart /> Dashboard</Link></li>
        <li><Link to="/livros"><FcReading /> Livros</Link></li>
        <li><Link to="/emprestimos"><FcRefresh /> Empréstimos</Link></li>
        <li><Link to="/alunos"><FcReadingEbook /> Alunos</Link></li>
        <li><Link to="/relatorios"><FcTemplate /> Relatórios</Link></li>
        <li><Link to="/configuracoes"><FcSettings /> Configurações</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;