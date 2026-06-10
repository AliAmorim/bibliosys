import React from 'react';
import './Dashboard.css';
import { IoLibraryOutline, IoSync, IoSchoolOutline, IoTimeOutline } from "react-icons/io5";
import StatCard from '../../components/StatCard/StatCard';
import LoanChart from '../../components/LoanChart/LoanChart';
import RecentLoans from '../../components/RecentLoans/RecentLoans';
import TopBooks from '../../components/TopBooks/TopBooks';
import { FaSearch, FaRegUserCircle } from "react-icons/fa";


function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="dashboard-search-container">
          <FaSearch className="dashboard-search-icon" />
          <input type="text" placeholder="Pesquisar..." className="dashboard-search" />
        </div>
        <FaRegUserCircle className="dashboard-user-icon" />
      </div>

      <div className="dashboard-content">
        <div className="dashboard-stats-row">
          <StatCard 
            title="Total de Livros"
            value="342"
            trend="↑ 12 este mês"
            icon={<IoLibraryOutline />}
            iconBgColor="rgba(13, 202, 240, 0.1)"
          />
          <StatCard 
            title="Empréstimos Ativos"
            value="28"
            trend="↓ 3 desde ontem"
            icon={<IoSync />}
            iconBgColor="rgba(25, 135, 84, 0.1)"
          />
          <StatCard 
            title="Alunos Cadastrados"
            value="856"
            trend="↑ 8 esta semana"
            icon={<IoSchoolOutline />}
            iconBgColor="rgba(255, 193, 7, 0.1)"
          />
          <StatCard 
            title="Em Atraso"
            value="7"
            trend="↓ 2 desde sexta"
            icon={<IoTimeOutline />}
            iconBgColor="rgba(220, 53, 69, 0.1)"
          />
        </div>

        <div className="dashboard-main-row">
          <LoanChart />
          <RecentLoans />
        </div>

        <div className="dashboard-secondary-row">
          <TopBooks />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;