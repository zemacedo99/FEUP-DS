import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Input, IconContainer, IconInputContainer, MovingIconInputContainer, MovingInput,
} from './style';

export default function IconInput({
  value,
  setValue,
  onKeyUp,
  icon,
}) {
  const location = useLocation();
  const searchInput = useRef();

  const handleFocus = () => {
    searchInput.current.focus();
  };

  if (location.pathname !== '/search') {
    return (
      <MovingIconInputContainer>
        <IconContainer onClick={handleFocus} data-testid="search-icon">{icon}</IconContainer>
        <MovingInput
          className="form-control"
          value={value}
          placeholder="Search here..."
          onKeyUp={onKeyUp}
          onChange={(e) => setValue(e.target.value)}
          ref={searchInput}
          data-testid="search-input"
        />
      </MovingIconInputContainer>
    );
  }
  if (location.pathname === '/search') {
    return (
      <IconInputContainer>
        <IconContainer>{icon}</IconContainer>
        <Input
          className="form-control"
          value={value}
          placeholder="Search here..."
          onKeyUp={onKeyUp}
          onChange={(e) => setValue(e.target.value)}
          data-testid="search-input"
        />
      </IconInputContainer>
    );
  }
}

IconInput.defaultProps = {
  onKeyUp: undefined,
};

IconInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
  icon: PropTypes.element.isRequired,
};
