import React from 'react';
import './TopBooks.css';

// Dados de exemplo
const booksData = [
  { rank: 1, title: 'O Pequeno Príncipe', author: 'Saint-Exupéry', checkouts: 47 },
  { rank: 2, title: 'Dom Casmurro', author: 'Machado de Assis', checkouts: 41 },
  { rank: 3, title: '1984', author: 'George Orwell', checkouts: 38 },
  { rank: 4, title: 'A Revolução dos Bichos', author: 'George Orwell', checkouts: 31 },
];

function TopBooks() {
  return (
    <div className="top-books-container">
      <h3>Livros Mais Retirados</h3>
      <div className="top-books-list">
        <div className="list-header">
          <span>#</span>
          <span>Título</span>
          <span>Autor</span>
          <span>Retiradas</span>
        </div>
        {booksData.map((book) => (
          <div key={book.rank} className="book-item">
            <span>{book.rank}</span>
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.checkouts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBooks;