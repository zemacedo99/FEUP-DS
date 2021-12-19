import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import BookmarksSelector from '../../components/BookmarksSelector';
import PatternCardList from '../../components/PatternCardList';
import patterns from '../../placeholders/PlaceholderPatterns';
import { Layout, PageTitle } from '../../style';

export default function BookmarksPage() {
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
        <Col md="8">
          <PageTitle> Bookmarks </PageTitle>
        </Col>
        <BookmarksSelector
          md="4"
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
