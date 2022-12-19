// Import configureStore() from Redux toolkit:
import { configureStore } from '@reduxjs/toolkit';

// import reducers
// import bookReducer from './books/books';

const store = configureStore({
  reducer: {
    // booksReducer, // Add mssion reducer
  },
});

export default store;
