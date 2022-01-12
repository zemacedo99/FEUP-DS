import React, { useEffect, useState, useContext } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import ReactGA from 'react-ga';

import axios from 'axios';

import PatternCardList from '../../components/PatternCardList';
import SearchBar from '../../components/SearchBar';
import { SearchContext } from '../../context/SearchContext';
import { Layout, PageTitle } from '../../style';
import { SearchBarContainer } from './style';

export default function SearchPage() {
  const [loading, setLoading] = useState(false);
  const [delayedSearchTerm, setDelayedSearchTerm] = useState('');
  const [patternsList, setPatterns] = useState();
  const setFavoriteIds = useState(JSON.parse(localStorage.getItem('favorites')))[1];
  const setBookmarkIds = useState(JSON.parse(localStorage.getItem('bookmarks')))[1];

  const { text } = useContext(SearchContext);

  useEffect(() => {
    document.title = 'Search';
    ReactGA.pageview('/search');
  }, []);

  const updatePattern = (pattern) => {
    const index = patternsList.findIndex((item) => item.id === pattern.id);
    const list = patternsList;
    list.splice(index, 1, pattern);
    setPatterns([...list]);
  };

  const sendRequest = () => {
    axios.get(`${process.env.REACT_APP_URL}/search`, { params: { query: text } }).then((res) => {
      setPatterns(res.data);
    }).catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      sendRequest();
      setDelayedSearchTerm(text);
      setLoading(false);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [text]);

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
      {loading && (
        <Row className="justify-content-center">
          <Col xs="auto">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )}
      {!loading && delayedSearchTerm !== '' && (
        <p>
          Showing results for &quot;
          {delayedSearchTerm}
          &quot;.
        </p>
      )}
      {!loading && patternsList && (
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
