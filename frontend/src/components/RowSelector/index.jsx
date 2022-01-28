import React, { useState } from 'react';

import PropTypes from 'prop-types';

import {
  BookmarksButton,
  ButtonWrapper,
  LeftButtonBackground,
  RightButtonBackground,
} from './style';

export default function RowSelector({
  onChange, lhs, rhs, initialState,
}) {
  const [lhsSelected, setLhsSelected] = useState(initialState);

  return (
    <ButtonWrapper>
      <LeftButtonBackground>
        <BookmarksButton
          role="button"
          onClick={() => {
            setLhsSelected(true);
            onChange('lhs');
          }}
          onKeyPress={() => { }}
          tabIndex="0"
          selected={lhsSelected}
        >
          {lhs}
        </BookmarksButton>
      </LeftButtonBackground>
      <RightButtonBackground>
        <BookmarksButton
          role="button"
          onClick={() => {
            setLhsSelected(false);
            onChange('rhs');
          }}
          onKeyPress={() => { }}
          tabIndex="0"
          selected={!lhsSelected}
        >
          {rhs}
        </BookmarksButton>
      </RightButtonBackground>
    </ButtonWrapper>
  );
}

RowSelector.defaultProps = {
  initialState: true,
};

RowSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  lhs: PropTypes.string.isRequired,
  rhs: PropTypes.string.isRequired,
  initialState: PropTypes.bool,
};
