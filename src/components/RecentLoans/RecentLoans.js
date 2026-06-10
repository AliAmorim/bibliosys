import React from 'react';
import StatusBadge from '../StatusBadge/StatusBadge';
import './RecentLoans.css';

// Dados de exemplo
const loansData = [
  { student: 'Ana Clara', book: 'O Pequeno Príncipe', status: 'Em dia' },
  { student: 'Lucas Mendes', book: 'Dom Casmurro', status: 'Vence amanhã' },
  { student: 'Julia Costa', book: '1984', status: 'Atrasado' },
  { student: 'Pedro Santos', book: 'A Moreninha', status: 'Em dia' },
  { student: 'Marina Rocha', book: 'Memórias Póstumas', status: 'Em dia' },
];

function RecentLoans() {
  return (
    <div className="recent-loans-container">
      <div className="recent-loans-header">
        <h3>Empréstimos Recentes</h3>
        <a href="#">Ver todos</a>
      </div>
      <div className="recent-loans-list">
        <div className="list-header">
          <span>Aluno</span>
          <span>Livro</span>
          <span>Status</span>
        </div>
        {loansData.map((loan, index) => (
          <div key={index} className="loan-item">
            <span>{loan.student}</span>
            <span>{loan.book}</span>
            <span><StatusBadge status={loan.status} /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentLoans;