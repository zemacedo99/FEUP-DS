import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import PatternCardList from '../../components/PatternCardList';
import patterns from '../../placeholders/PlaceholderPatterns';
import { Layout, PageTitle } from '../../style';

export default function ReadLaterPage() {
  // const [text, setText] = useState('');
  const [patternsList, setPatterns] = useState(patterns);

  const updatePattern = (pattern) => {
    const index = patternsList.findIndex((item) => item.id === pattern.id);
    const list = patternsList;
    list.splice(index, 1, pattern);
    setPatterns([...list]);
  };

  return (
    <Layout>
      <Row>
        <Col>
          <PageTitle> Read Later </PageTitle>
        </Col>
      </Row>
      {/* <SearchBarMB text={text} setText={setText} /> */}
      {/* {text !== '' ? (
        <p>
          Showing results for &quot;
          {text}
          &quot;.
        </p>
      ) : undefined} */}
      <PatternCardList patterns={patternsList} updatePattern={updatePattern} />
    </Layout>
  );
}
