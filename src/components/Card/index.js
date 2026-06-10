import React from 'react';
import './style.css';

// Agora recebemos "icon" e "title" como propriedades
function Card({ icon, title, text, layout = 'vertical' }) {
  // Adiciona a classe 'card-horizontal' se o layout for horizontal
  const cardClasses = `card ${layout === 'horizontal' ? 'card-horizontal' : ''}`;

  return (
    <div className={cardClasses}>
      <div className="card-header">
        {icon}
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Card;