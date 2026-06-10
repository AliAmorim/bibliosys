import React from 'react';
import './StatusBadge.css';

function StatusBadge({ status }) {
  // Mapeia o texto do status para uma classe CSS
  const getStatusClass = () => {
    switch (status) {
      case 'Em dia':
        return 'status-ontime';
      case 'Vence amanhã':
        return 'status-due-soon';
      case 'Atrasado':
        return 'status-overdue';
      default:
        return '';
    }
  };

  return (
    <span className={`status-badge ${getStatusClass()}`}>
      <span className="status-dot"></span>
      {status}
    </span>
  );
}

export default StatusBadge;