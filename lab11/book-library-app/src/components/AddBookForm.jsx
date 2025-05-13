import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';

function AddBookForm() {
  const { addBook } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    addBook({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;