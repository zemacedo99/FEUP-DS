import React, { useContext } from 'react';
import { BiSearch } from 'react-icons/bi';

import PropTypes from 'prop-types';

import { SearchContext } from '../../context/SearchContext';
import IconInput from '../IconInput';

export default function SearchBar({ onKeyUp }) {
  const { text, setText } = useContext(SearchContext);

  return <IconInput value={text} setValue={setText} onKeyUp={onKeyUp} icon={<BiSearch />} />;
}

SearchBar.defaultProps = {
  onKeyUp: undefined,
};

SearchBar.propTypes = {
  onKeyUp: PropTypes.func,
};
