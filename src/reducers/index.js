import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer, /* this reducer will add the key books to app state, returning an array of books from the reducer */
  activeBook: ActiveBook
});

export default rootReducer;