import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import './AddBookModal.css';

function AddBookModal({ isOpen, onClose, onSave }) {
  // Estados para cada campo do formulário
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [category, setCategory] = useState('Literatura Brasileira');
  const [publisher, setPublisher] = useState('');
  const [description, setDescription] = useState('');

  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) {
    return null;
  }

  const handleSave = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    const newBook = {
      title,
      author,
      isbn,
      year: parseInt(publishYear, 10),
      category,
      status: 'Disponível', // Todo livro novo começa como disponível
    };
    onSave(newBook);
    onClose(); // Fecha o modal depois de salvar
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Novo Livro</h2>
          <button onClick={onClose} className="close-button">
            <IoClose size={24} />
          </button>
        </div>
        <form onSubmit={handleSave} className="modal-form">
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="title">Título *</label>
              <input id="title" type="text"  placeholder="Título Completo" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="author">Autor *</label>
              <input id="author" type="text"  placeholder="Nome do Autor" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="isbn">ISBN</label>
              <input id="isbn" type="text"  value={isbn} onChange={(e) => setIsbn(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="publishYear">Ano de Publicação</label>
              <input id="publishYear" type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="category">Categoria</label>
              <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Literatura Brasileira</option>
                <option>Literatura Estrangeira</option>
                <option>Ciências</option>
                <option>Matemática</option>
                <option>História</option>
                <option>Filosofia</option>
              </select>
            </div>
             <div className="form-group">
              <label htmlFor="publisher">Editora</label>
              <input id="publisher" type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
            </div>
            <div className="form-group full-width">
              <label htmlFor="description">Descrição</label>
              <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4"></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancelar
            </button>
            <button type="submit" className="btn-save">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBookModal;