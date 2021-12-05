import React from 'react';
import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.patlet_id = props.patlet_id;

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    if (bookmarks === undefined || bookmarks === null) {
      bookmarks = {};
    }

    this.state = { bookmarks };
  }

  updateBookmark() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    if (bookmarks[this.patlet_id] === undefined) {
      bookmarks[this.patlet_id] = true;
    } else {
      delete bookmarks[this.patlet_id];
    }

    this.setState({ bookmarks });
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  render() {
    const { bookmarks } = this.state;

    return (
      <span role="button" onClick={() => { this.updateBookmark(); }} onKeyPress={() => {}} tabIndex="0">
        { bookmarks[this.patlet_id] === true
          ? <AiFillStar />
          : <AiOutlineStar /> }
      </span>
    );
  }
}

Bookmark.propTypes = {
  patlet_id: PropTypes.number.isRequired,
};

export { Bookmark };
