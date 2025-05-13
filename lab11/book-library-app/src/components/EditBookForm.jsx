import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';

function EditBookForm({ book, onClose }) {
  const { updateBook } = useBookContext();
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook({ ...book, title, author });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <button type="submit">Update</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}

export default EditBookForm;