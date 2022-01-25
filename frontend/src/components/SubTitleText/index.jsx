import React from 'react';

import * as PropTypes from 'prop-types';

import { SubTitle, Text } from './style';

export default function SubTitleText({ children, title }) {
  return (
    <div>
      <SubTitle className="mt-4">{ title }</SubTitle>
      { children !== '' ? <Text>{ children }</Text> : undefined }
    </div>
  );
}

SubTitleText.defaultProps = {
  children: '',
};

SubTitleText.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
};
