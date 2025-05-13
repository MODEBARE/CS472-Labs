import React from 'react';
import { useParams } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';
import EditBookForm from '../components/EditBookForm';

export default function EditBookPage() {
  const { id } = useParams();
  const { books } = useBookContext();
  const book = books.find(b => b.id === id);

  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <h2>Edit Book</h2>
      <EditBookForm book={book} onClose={() => {}} />
    </div>
  );
}