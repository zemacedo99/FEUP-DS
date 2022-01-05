import React, { useEffect, useState, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';

import axios from 'axios';

import PatternCardList from '../../components/PatternCardList';
import SearchBar from '../../components/SearchBar';
import { SearchContext } from '../../context/SearchContext';
import { Layout, PageTitle } from '../../style';
import { SearchBarContainer } from './style';

export default function SearchPage() {
  const [patternsList, setPatterns] = useState();
  const setFavoriteIds = useState(JSON.parse(localStorage.getItem('favorites')))[1];
  const setBookmarkIds = useState(JSON.parse(localStorage.getItem('bookmarks')))[1];

  const { text } = useContext(SearchContext);

  const updatePattern = (pattern) => {
    const index = patternsList.findIndex((item) => item.id === pattern.id);
    const list = patternsList;
    list.splice(index, 1, pattern);
    setPatterns([...list]);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/search`, { query: '' }).then((res) => {
      console.log(res.data);
      setPatterns(res.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <Layout>
      <Row>
        <Col>
          <PageTitle> Search </PageTitle>
        </Col>
      </Row>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      {text !== '' && (
        <p>
          Showing results for &quot;
          {text}
          &quot;.
        </p>
      )}
      {patternsList && (
        <PatternCardList
          patterns={patternsList}
          updatePattern={updatePattern}
          setFavoriteIds={setFavoriteIds}
          setBookmarkIds={setBookmarkIds}
        />
      )}
    </Layout>
  );
}
