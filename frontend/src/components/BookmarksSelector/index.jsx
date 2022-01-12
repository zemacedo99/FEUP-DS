import React from 'react';

import PropTypes from 'prop-types';

import {
  BookmarksButton,
  ButtonWrapper,
  LeftButtonBackground,
  RightButtonBackground,
} from './style';

export default function BookmarksSelector({ isFavoriteList, setFavoriteList }) {
  return (
    <ButtonWrapper>
      <LeftButtonBackground>
        <BookmarksButton
          role="button"
          onClick={() => { setFavoriteList(true); }}
          onKeyPress={() => { }}
          tabIndex="0"
          selected={isFavoriteList}
        >
          Favorites
        </BookmarksButton>
      </LeftButtonBackground>
      <RightButtonBackground>
        <BookmarksButton
          role="button"
          onClick={() => { setFavoriteList(false); }}
          onKeyPress={() => { }}
          tabIndex="0"
          selected={!isFavoriteList}
        >
          Bookmarks
        </BookmarksButton>
      </RightButtonBackground>
    </ButtonWrapper>
  );
}

BookmarksSelector.propTypes = {
  isFavoriteList: PropTypes.bool.isRequired,
  setFavoriteList: PropTypes.func.isRequired,
};
