import React from 'react';

import PropTypes from 'prop-types';

import { Input, IconContainer, IconInputContainer } from './style';

export default function IconInput({ value, setValue, icon }) {
  return (
    <IconInputContainer>
      <IconContainer>{icon}</IconContainer>
      <Input
        className="form-control"
        value={value}
        placeholder="Search here..."
        onChange={(e) => setValue(e.target.value)}
      />
    </IconInputContainer>
  );
}

IconInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
};
