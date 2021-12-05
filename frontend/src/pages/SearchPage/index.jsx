import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import patterns from '../../assets/PlaceholderPatterns';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import PatternCardList from '../../components/PatternCardList';
import SearchBar from '../../components/SearchBar';

export default function SearchPage() {
  const [text, setText] = useState('');

  return (
    <Layout>
      <Row>
        <Col>
          <PageTitle> Search </PageTitle>
        </Col>
      </Row>
      <SearchBar text={text} setText={setText} />
      {text !== '' ? (
        <p>
          Showing results for &quot;
          {text}
          &quot;.
        </p>
      ) : undefined}
      <PatternCardList patterns={patterns} />
    </Layout>
  );
}
