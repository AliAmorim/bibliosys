import React, { useState } from 'react';
import './Livros.css';
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import BooksTable from '../../components/BooksTable/BooksTable';
import AddBookModal from '../../components/AddBookModal/AddBookModal';

// Dados de amostra (nosso "estoque" inicial)
const initialBooks = [
  { isbn: '978-85-1234-567-8', title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', category: 'Literatura Estrangeira', year: 1943, status: 'Disponível' },
  { isbn: '978-85-1234-567-9', title: 'Dom Casmurro', author: 'Machado de Assis', category: 'Literatura Brasileira', year: 1899, status: 'Emprestado' },
  { isbn: '978-85-1234-568-0', title: '1984', author: 'George Orwell', category: 'Literatura Estrangeira', year: 1949, status: 'Disponível' },
  { isbn: '978-85-1234-568-1', title: 'A Moreninha', author: 'Joaquim Manuel de Macedo', category: 'Literatura Brasileira', year: 1844, status: 'Disponível' },
  { isbn: '978-85-1234-568-2', title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', category: 'Literatura Brasileira', year: 1881, status: 'Emprestado' },
];

function Livros() {
    const [books, setBooks] = useState(initialBooks);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveBook = (newBookData) => {
      const newBook = {
        ...newBookData,
        // Em um app real, o ID/ISBN seria gerado pelo backend
        isbn: newBookData.isbn || `978-85-0000-${Math.floor(1000 + Math.random() * 9000)}`,
      };
      setBooks(currentBooks => [newBook, ...currentBooks]);
    };

    return (
        <>
          <div className="livros-header">
            <h1>Livros</h1>
            <div className="livros-search-container">
              <FaSearch className="livros-search-icon" />
              <input type="text" placeholder="Pesquisar..." className="livros-search" />
            </div>
            <button className="btn-livro" onClick={() => setIsModalOpen(true)}>+ Novo Livro</button>
            <a href="/perfil"><FaRegUserCircle className="livros-user-icon" /></a>
          </div>
          <div className="livros-content">
            <div className="livros-filtros">
              <select placeholder="" className="livros-filtro-input" > 
                <option value="" selected>Todas as categorias</option>
                <option value="titulo1">Literatura Brasileira</option>
                <option value="titulo2">Literatura Estrangeira</option>
                <option value="titulo3">Ciências</option>
                <option value="titulo4">Matemática</option>
                <option value="titulo5">História</option>
                <option value="titulo6">Filosofia</option>
              </select>
              <select placeholder="" className="livros-filtro-input" >
                <option value="" selected>Todos os Status</option>
                <option value="titulo1">Disponível</option>
                <option value="titulo2">Emprestado</option>
                <option value="titulo3">Reservado</option>
                <option value="titulo4">Manutenção</option>
              </select>
              <button className="btn-livro-filtrar">Filtrar</button>
              <button className="btn-livro-limpar">Limpar Filtros</button>
            </div>
            <div className="livros-lista">
              <BooksTable books={books} />
            </div>
          </div>
          <AddBookModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSaveBook}
          />
        </>
    );
}

export default Livros;