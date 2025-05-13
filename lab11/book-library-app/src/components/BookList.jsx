import React from 'react';
import { Link } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';

function BookList() {
  const { books, deleteBook, loading, error } = useBookContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <p><strong>{book.title}</strong> by {book.author}</p>
          <Link to={`/edit/${book.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;