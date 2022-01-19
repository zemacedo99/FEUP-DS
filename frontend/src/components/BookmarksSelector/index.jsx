import React from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  BookmarksButton,
  ButtonWrapper,
  LeftButtonBackground,
  RightButtonBackground,
} from './style';

export default function BookmarksSelector({ isFavoriteList, setFavoriteList }) {
  const navigate = useNavigate();

  return (
    <ButtonWrapper>
      <LeftButtonBackground>
        <BookmarksButton
          role="button"
          onClick={() => {
            navigate('/favorites');
            setFavoriteList(true);
          }}
          tabIndex="0"
          selected={isFavoriteList}
        >
          Favorites
        </BookmarksButton>
      </LeftButtonBackground>
      <RightButtonBackground>
        <BookmarksButton
          role="button"
          onClick={() => {
            navigate('/saved');
            setFavoriteList(false);
          }}
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
