import React from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import RowSelector from '../RowSelector';

export default function BookmarksSelector({ updateListView, initialState }) {
  const navigate = useNavigate();

  return (
    <RowSelector
      md="4"
      onChange={(side) => {
        const isFavoriteList = side === 'lhs';
        updateListView(isFavoriteList);
        navigate(isFavoriteList ? '/favorites' : '/saved');
      }}
      lhs="Favorites"
      rhs="Saved"
      initialState={initialState}
    />
  );
}

BookmarksSelector.defaultProps = {
  initialState: true,
};

BookmarksSelector.propTypes = {
  updateListView: PropTypes.func.isRequired,
  initialState: PropTypes.bool,
};
