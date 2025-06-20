import React from 'react';
import { BookProvider } from './context/BookContext';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

function App() {
  return (
    <BookProvider>
      <div className="container">
        <h1>Book Library</h1>
        <AddBookForm />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;