import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import AddBookPage from './pages/AddBookPage';
import ListBooksPage from './pages/ListBooksPage';
import EditBookPage from './pages/EditBookPage';

const App = () => (
  <BookProvider>
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/add">Add Book</Link>
    </nav>
    <Routes>
      <Route path="/" element={<ListBooksPage />} />
      <Route path="/add" element={<AddBookPage />} />
      <Route path="/edit/:id" element={<EditBookPage />} />
    </Routes>
  </BookProvider>
);

export default App;