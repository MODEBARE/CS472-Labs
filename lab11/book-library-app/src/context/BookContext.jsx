import React, { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext(null);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://67d17ef590e0670699ba5929.mockapi.io/books";

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setBooks(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (book) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });
      const newBook = await res.json();
      setBooks(prev => [...prev, newBook]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateBook = async (updatedBook) => {
    try {
      const res = await fetch(`${API_URL}/${updatedBook.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBook),
      });
      const data = await res.json();
      setBooks(prev => prev.map(book => book.id === data.id ? data : book));
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteBook = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setBooks(prev => prev.filter(book => book.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <BookContext.Provider value={{ books, addBook, updateBook, deleteBook, loading, error }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);