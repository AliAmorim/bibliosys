import React from 'react';
import { FaPencilAlt, FaEye, FaTrash } from 'react-icons/fa';
import './BooksTable.css';

// Este componente não tem dados próprios. Ele recebe os livros via props.
function BooksTable({ books }) {
  return (
    <div className="books-table-container">
      <table className="books-table">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Categoria</th>
            <th>Ano</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.isbn}>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.year}</td>
              <td>
                {/* Aqui podemos usar um badge de status no futuro */}
                <span className={`status-${book.status.toLowerCase()}`}>{book.status}</span>
              </td>
              <td className="action-icons">
                <FaPencilAlt className="icon edit-icon" title="Editar" />
                <FaEye className="icon view-icon" title="Visualizar" />
                <FaTrash className="icon delete-icon" title="Excluir" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksTable;