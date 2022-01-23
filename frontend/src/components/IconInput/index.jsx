import React from 'react';
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

  if (location.pathname !== '/search') {
    return (
      <MovingIconInputContainer>
        <IconContainer>{icon}</IconContainer>
        <MovingInput
          className="form-control"
          value={value}
          placeholder="Search here..."
          onKeyUp={onKeyUp}
          onChange={(e) => setValue(e.target.value)}
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
