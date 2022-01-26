import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

import axios from 'axios';

import PatternCardList from '../../components/PatternCardList';
import { Layout, PageTitle } from '../../style/GlobalStyle';

export default function MainPage() {
  const [loading, setLoading] = useState(false);
  const [patternsList, setPatterns] = useState([]);
  const setFavoriteIds = useState(JSON.parse(localStorage.getItem('favorites')))[1];
  const setBookmarkIds = useState(JSON.parse(localStorage.getItem('bookmarks')))[1];

  useEffect(() => {
    setLoading(true);
    document.title = 'A Scrum Book';

    axios.get(`${process.env.REACT_APP_URL}/patterns`).then((res) => {
      setPatterns(res.data);
      setLoading(false);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <Layout>
      <Row className="align-items-center">
        <Col>
          <PageTitle> Home </PageTitle>
        </Col>
      </Row>
      <Row className="mb-1" />
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
            setFavoriteIds={setFavoriteIds}
            setBookmarkIds={setBookmarkIds}
          />
        )}
    </Layout>
  );
}
