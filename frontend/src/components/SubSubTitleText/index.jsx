import React from 'react';

import * as PropTypes from 'prop-types';

import { SubSubTitle, Text } from './style';

export default function SubSubTitleText({ children, title }) {
  return (
    <div>
      <SubSubTitle className="mt-4">{ title }</SubSubTitle>
      <Text>{ children }</Text>
    </div>
  );
}

SubSubTitleText.defaultProps = {
  children: '',
};

SubSubTitleText.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
};
