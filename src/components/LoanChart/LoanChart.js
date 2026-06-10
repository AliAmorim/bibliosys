import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './LoanChart.css';

// Dados de exemplo. No futuro, isso virá do "banco de dados".
const data = [
  { name: 'Seg', value: 24 },
  { name: 'Ter', value: 45 },
  { name: 'Qua', value: 18 },
  { name: 'Qui', value: 33 },
  { name: 'Sex', value: 52 },
  { name: 'Sáb', value: 15 },
  { name: 'Dom', value: 8 },
];

function LoanChart() {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Movimentação de Empréstimos</h3>
        <select className="chart-filter">
          <option>Últimos 7 dias</option>
          <option>Últimos 15 dias</option>
          <option>Último mês</option>
        </select>
      </div>
      <div className="chart-content">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} allowDecimals={false} />
            <Tooltip cursor={{fill: 'rgba(59, 130, 246, 0.1)'}} contentStyle={{background: '#fff', border: '1px solid #ddd', borderRadius: '4px'}} />
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LoanChart;