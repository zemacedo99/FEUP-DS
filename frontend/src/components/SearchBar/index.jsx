import React, { useContext } from 'react';
import { BiSearch } from 'react-icons/bi';

import { SearchContext } from '../../context/SearchContext';
import IconInput from '../IconInput';

export default function SearchBar() {
  // eslint-disable-next-line no-unused-vars
  const { text, setText } = useContext(SearchContext);

  return <IconInput value={text} setValue={setText} icon={<BiSearch />} />;
}
