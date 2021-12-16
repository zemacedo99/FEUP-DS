import React from 'react';
import { BiSearch } from 'react-icons/bi';

import PropTypes from 'prop-types';

import IconInput from '../IconInput';

export default function SearchBar({ text, setText }) {
  return <IconInput value={text} setValue={setText} icon={<BiSearch />} />;
}

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};
