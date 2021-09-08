import { createSlice } from "@reduxjs/toolkit";
import { BOOKS } from "app/data";
export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: BOOKS,
    },
    reducers: {
    addBooks: (state, action) => {
        state.books = action.payload;
        }
    }
  });
  
  export const selectBooks = (state) => state.books.books;
  export const filterBooks = (query, books) => Object.values(books).filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
  export const { addBooks } = booksSlice.actions;
  export default booksSlice.reducer;