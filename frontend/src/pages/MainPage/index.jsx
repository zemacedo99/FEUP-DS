import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import infoIcon from '../../assets/infoIcon.svg';
import PatternCardList from '../../components/PatternCardList';
import patterns from '../../placeholders/PlaceholderPatterns';
import { Layout, PageTitle } from '../../style';
import { SubTitle } from './style';

export default function MainPage() {
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
          <PageTitle> Home </PageTitle>
        </Col>
        <Col className="d-flex d-lg-none justify-content-end pe-4">
          <img src={infoIcon} width="30px" alt="info icon" title="Help" style={{ cursor: 'pointer' }} />
        </Col>
      </Row>
      <SubTitle> The core of Scrum </SubTitle>
      <button id="button" aria-describedby="tooltip" type="button">
        My button
      </button>
      <PatternCardList patterns={patternsList} updatePattern={updatePattern} />
    </Layout>
  );
}
