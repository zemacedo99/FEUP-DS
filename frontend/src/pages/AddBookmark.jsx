import React from 'react';

import PropTypes from 'prop-types';

import { Bookmark } from '../components/Bookmark/index';

export default function AddBookmark({ setBookmarkIds }) {
  return (
    <div>
      <Bookmark
        patlet_id={1}
        setBookmarkIds={setBookmarkIds}
      />
      <Bookmark
        patlet_id={2}
        setBookmarkIds={setBookmarkIds}
      />
      <Bookmark
        patlet_id={3}
        setBookmarkIds={setBookmarkIds}
      />
      <Bookmark
        patlet_id={4}
        setBookmarkIds={setBookmarkIds}
      />
      <Bookmark
        patlet_id={5}
        setBookmarkIds={setBookmarkIds}
      />
    </div>
  );
}

AddBookmark.propTypes = {
  setBookmarkIds: PropTypes.func.isRequired,
};
