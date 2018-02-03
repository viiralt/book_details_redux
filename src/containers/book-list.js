import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        /* receives the list of books and for each, creates a li with the title */
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}
// takes in all of the app data (books, activeBook)
function mapStateToProps(state) {
  // whatever is returned, will show up as props on the BookList container
  return {
    books: state.books
  }
}

// anything returned from this func will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // when selectBook is called, the result should be passed to all of the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList from component to container - it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
