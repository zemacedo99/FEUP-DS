import React, { useState, useEffect, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

import axios from 'axios';

import RowSelector from '../../components/RowSelector';
import { Layout, PageTitle } from '../../style';
import { CustomPatternCardList } from './style';

function filterPatterns(patterns, filter) {
  return [...new Set([].concat(patterns.map((pattern) => {
    if (pattern[filter]) {
      return [...pattern[filter], `/patlets/${pattern.id}`];
    }

    return [];
  })).flat().map((name) => parseInt(name.replace('/patlets/', ''), 10)))].sort((lhs, rhs) => lhs - rhs);
}

export default function PatternsPage() {
  const [loading, setLoading] = useState(false);
  const [patternsList, setPatterns] = useState([]);
  const setFavoriteIds = useState(
    JSON.parse(localStorage.getItem('favorites')),
  )[1];
  const setBookmarkIds = useState(
    JSON.parse(localStorage.getItem('bookmarks')),
  )[1];

  useEffect(() => {
    setLoading(true);
    document.title = 'The Scrum Book';
    axios
      .get(`${process.env.REACT_APP_URL}/patterns`)
      .then((res) => {
        setPatterns(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const updatePattern = (pattern) => {
    const index = patternsList.findIndex((item) => item.id === pattern.id);
    const list = patternsList;
    list.splice(index, 1, pattern);
    setPatterns([...list]);
  };

  const { patternsPo, patternsVs } = useMemo(() => {
    const patternsPoIds = filterPatterns(patternsList, 'graphPo');
    const patternsVsIds = filterPatterns(patternsList, 'graphVs');

    return {
      patternsPo: patternsList.filter((pattern) => patternsPoIds.includes(pattern.id)),
      patternsVs: patternsList.filter((pattern) => patternsVsIds.includes(pattern.id)),
    };
  }, [patternsList]);

  const [patternsSelected, setPatternsSelected] = useState('po');

  return (
    <Layout>
      <Row className="align-items-center">
        <Col>
          <PageTitle>All patterns</PageTitle>
        </Col>
      </Row>
      {loading ? (
        <Row className="mt-5 d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      ) : (
        <>
          <Container fluid className="d-none d-md-flex flex-column mx-0 px-0 mt-2">
            <Row className="gy-5 sm:gy-0 w-100 d-flex flex-column">
              <Col>
                <h3 className="fs-5" style={{ height: '2.5rem' }}>Product Organization Pattern Language</h3>
                <CustomPatternCardList
                  patterns={patternsPo}
                  updatePattern={updatePattern}
                  setFavoriteIds={setFavoriteIds}
                  setBookmarkIds={setBookmarkIds}
                />
              </Col>
              <Col>
                <h3 className="fs-5" style={{ height: '2.5rem' }}>Value Stream Pattern Language</h3>
                <CustomPatternCardList
                  patterns={patternsVs}
                  updatePattern={updatePattern}
                  setFavoriteIds={setFavoriteIds}
                  setBookmarkIds={setBookmarkIds}
                />
              </Col>
            </Row>
          </Container>
          <Container fluid className="d-flex d-md-none flex-column mx-0 px-0">
            <RowSelector onChange={(action) => setPatternsSelected(action === 'lhs' ? 'po' : 'vs')} lhs="Product Organization" rhs="Value Stream" />
            {patternsSelected === 'po'
              ? (
                <Col className="mt-3">
                  <CustomPatternCardList
                    half
                    patterns={patternsPo}
                    updatePattern={updatePattern}
                    setFavoriteIds={setFavoriteIds}
                    setBookmarkIds={setBookmarkIds}
                  />
                </Col>
              ) : (
                <Col className="mt-3">
                  <CustomPatternCardList
                    half
                    patterns={patternsVs}
                    updatePattern={updatePattern}
                    setFavoriteIds={setFavoriteIds}
                    setBookmarkIds={setBookmarkIds}
                  />
                </Col>
              )}
          </Container>
        </>
      )}
    </Layout>
  );
}
