import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

import axios from 'axios';

import PatternCardList from '../../components/PatternCardList';
import { Layout, PageTitle } from '../../style';
import { SubTitle } from './style';

export default function MainPage() {
  const [loading, setLoading] = useState(false);
  const [patternsList, setPatterns] = useState([]);
  const setFavoriteIds = useState(JSON.parse(localStorage.getItem('favorites')))[1];
  const setBookmarkIds = useState(JSON.parse(localStorage.getItem('bookmarks')))[1];

  useEffect(() => {
    setLoading(true);
    document.title = 'The Scrum Book';
    axios.get(`${process.env.REACT_APP_URL}/patterns`).then((res) => {
      setPatterns(res.data);
      setLoading(false);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const updatePattern = (pattern) => {
    const index = patternsList.findIndex((item) => item.id === pattern.id);
    const list = patternsList;
    list.splice(index, 1, pattern);
    setPatterns([...list]);
  };

  return (
    <Layout>
      <Row className="align-items-center">
        <Col>
          <PageTitle> Home </PageTitle>
        </Col>
      </Row>
      <SubTitle> The core of Scrum </SubTitle>
      { loading ? (
        <Row className="mt-5 d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      )
        : (
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
