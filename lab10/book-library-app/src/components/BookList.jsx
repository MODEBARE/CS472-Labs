import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';
import EditBookForm from './EditBookForm';

function BookList() {
  const { books, deleteBook, loading, error } = useBookContext();
  const [editingBook, setEditingBook] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          {editingBook?.id === book.id ? (
            <EditBookForm book={book} onClose={() => setEditingBook(null)} />
          ) : (
            <div>
              <p><strong>{book.title}</strong> by {book.author}</p>
              <button onClick={() => setEditingBook(book)}>Edit</button>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BookList;