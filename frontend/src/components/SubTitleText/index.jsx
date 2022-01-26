import React from 'react';

import * as PropTypes from 'prop-types';

import { SubTitle, Text } from './style';

export default function SubTitleText({ children, title }) {
  return (
    <div>
      <SubTitle className="mt-4">{ title }</SubTitle>
      <Text>{ children }</Text>
    </div>
  );
}

SubTitleText.defaultProps = {
  children: '',
};

SubTitleText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  title: PropTypes.string.isRequired,
};
