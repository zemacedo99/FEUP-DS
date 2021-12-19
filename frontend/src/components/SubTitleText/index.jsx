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

SubTitleText.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
