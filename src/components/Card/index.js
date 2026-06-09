import React from 'react';
import './style.css';

// Agora recebemos "icon" e "title" como propriedades
function Card({ icon, title, text }) {
  return (
    <div className="card">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Card;