import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import PatternCardList from '../../components/PatternCardList';
import ReadLaterSelector from '../../components/ReadLaterSelector';
import patterns from '../../placeholders/PlaceholderPatterns';
import { Layout, PageTitle } from '../../style';

export default function ReadLaterPage() {
  const [patternsList, setPatterns] = useState(patterns);
  const [isFavoriteList, setFavoriteList] = useState(true);

  const updatePattern = (pattern) => {
    const index = patternsList.findIndex((item) => item.id === pattern.id);
    const list = patternsList;
    list.splice(index, 1, pattern);
    setPatterns([...list]);
  };

  const favoriteList = patternsList.filter((e) => e.favorite);
  const readlaterList = patternsList.filter((e) => e.saved);

  return (
    <Layout>
      <Row>
        <Col md="9">
          <PageTitle> Bookmarks </PageTitle>
        </Col>
        <ReadLaterSelector
          md="3"
          setFavoriteList={setFavoriteList}
          isFavoriteList={isFavoriteList}
        />
      </Row>
      <PatternCardList
        patterns={isFavoriteList ? favoriteList : readlaterList}
        updatePattern={updatePattern}
      />
    </Layout>
  );
}
