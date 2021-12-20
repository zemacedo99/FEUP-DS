import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import BookmarksSelector from '../../components/BookmarksSelector';
import PatternCardList from '../../components/PatternCardList';
import patterns from '../../placeholders/PlaceholderPatterns';
import { Layout, PageTitle } from '../../style';
import AddBookmark from '../AddBookmark';
import AddFavorite from '../AddFavorite';

export default function BookmarksPage() {
  const [patternsList, setPatterns] = useState(patterns);
  const [isFavoriteList, setFavoriteList] = useState(true);
  const [favoriteIds, setFavoriteIds] = useState(JSON.parse(localStorage.getItem('favorites')));
  const [bookmarkIds, setBookmarkIds] = useState(JSON.parse(localStorage.getItem('bookmarks')));

  if (!localStorage.getItem('patterns')) {
    localStorage.setItem('patterns', JSON.stringify(patterns));
  }

  const updatePattern = (pattern) => {
    const index = patternsList.findIndex((item) => item.id === pattern.id);
    const list = patternsList;
    list.splice(index, 1, pattern);
    setPatterns([...list]);
  };

  const storagePatterns = JSON.parse(localStorage.getItem('patterns'));
  const favoriteList = favoriteIds ? storagePatterns.filter(
    (e) => favoriteIds[e.id],
  ) : [];

  const readlaterIds = JSON.parse(localStorage.getItem('bookmarks'));
  const readlaterList = bookmarkIds ? storagePatterns.filter(
    (e) => readlaterIds[e.id],
  ) : [];

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
        setFavoriteIds={setFavoriteIds}
        setBookmarkIds={setBookmarkIds}
      />
      <AddFavorite
        setFavoriteIds={setFavoriteIds}
      />
      <AddBookmark
        setBookmarkIds={setBookmarkIds}
      />
    </Layout>
  );
}
