import React from 'react';

import PropTypes from 'prop-types';

import { Input, IconContainer, IconInputContainer } from './style';

export default function IconInput({
  value,
  setValue,
  onKeyUp,
  icon,
}) {
  return (
    <IconInputContainer>
      <IconContainer data-testid="search-icon">{icon}</IconContainer>
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

IconInput.defaultProps = {
  onKeyUp: undefined,
};

IconInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
  icon: PropTypes.element.isRequired,
};
