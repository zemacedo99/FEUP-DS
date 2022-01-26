import React from 'react';

import PropTypes from 'prop-types';

import {
  FillBookmarkCircle,
  OutlineBookmarkCircle,
} from './style';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.patlet_id = props.patlet_id;
    this.setBookmarkIds = props.setBookmarkIds;

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    if (bookmarks === undefined || bookmarks === null) {
      bookmarks = {};
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
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
    this.setBookmarkIds(bookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  render() {
    const { bookmarks } = this.state;
    const { className } = this.props;

    return (
      <span role="button" onClick={() => { this.updateBookmark(); }} onKeyPress={() => {}} tabIndex="0">
        { bookmarks[this.patlet_id] === true
          ? <FillBookmarkCircle className={className} title="Unsave" />
          : <OutlineBookmarkCircle className={className} title="Save to read later" /> }
      </span>
    );
  }
}

Bookmark.propTypes = {
  patlet_id: PropTypes.number.isRequired,
  setBookmarkIds: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Bookmark.defaultProps = {
  className: '',
};

export { Bookmark };
