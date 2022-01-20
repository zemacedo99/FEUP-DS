import React, {
  createContext, useContext, useState,
} from 'react';

import PropTypes from 'prop-types';

export const SearchContext = createContext({
  text: '',
  setText: () => {},
});

export const useSearch = () => useContext(SearchContext);

export default function SearchContextProvider({ children }) {
  const [text, setText] = useState('');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SearchContext.Provider value={{ text, setText }}>
      {children}
    </SearchContext.Provider>
  );
}

SearchContextProvider.defaultProps = {
  children: undefined,
};

SearchContextProvider.propTypes = {
  children: PropTypes.node,
};
