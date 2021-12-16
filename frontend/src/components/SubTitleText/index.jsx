import React from 'react';

import * as PropTypes from 'prop-types';

import { SubTitle, Text } from './style';

export default function SubTitleText({ title, text }) {
  return (
    <div>
      <SubTitle className="mt-4">{ title }</SubTitle>
      <Text>{ text }</Text>
    </div>
  );
}

SubTitleText.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
