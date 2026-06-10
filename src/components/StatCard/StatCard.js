import React from 'react';
import './StatCard.css';

function StatCard({ title, value, trend, icon, iconBgColor }) {
  // Define a cor do texto de tendência baseado no caractere (↑ ou ↓)
  const trendColor = trend.includes('↑') ? '#28a745' : '#dc3545'; // Verde para alta, vermelho para baixa

  return (
    <div className="stat-card">
      <div className="stat-card-info">
        <p className="stat-card-title">{title}</p>
        <h2 className="stat-card-value">{value}</h2>
        <p className="stat-card-trend" style={{ color: trendColor }}>
          {trend}
        </p>
      </div>
      <div className="stat-card-icon-wrapper" style={{ backgroundColor: iconBgColor }}>
        {icon}
      </div>
    </div>
  );
}

export default StatCard;