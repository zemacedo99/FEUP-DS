import React from 'react';

import PropTypes from 'prop-types';

import { ReadlaterButton, ButtonWrapper } from './style';

export default function ReadLaterSelector({ isFavoriteList, setFavoriteList }) {
  return (
    <ButtonWrapper>
      <ReadlaterButton
        role="button"
        onClick={() => { setFavoriteList(true); }}
        onKeyPress={() => { }}
        tabIndex="0"
        selected={isFavoriteList}
      >
        Favorites
      </ReadlaterButton>
      <ReadlaterButton
        role="button"
        onClick={() => { setFavoriteList(false); }}
        onKeyPress={() => { }}
        tabIndex="0"
        selected={!isFavoriteList}
      >
        Saved
      </ReadlaterButton>
    </ButtonWrapper>
  );
}

ReadLaterSelector.propTypes = {
  isFavoriteList: PropTypes.bool.isRequired,
  setFavoriteList: PropTypes.func.isRequired,
};
