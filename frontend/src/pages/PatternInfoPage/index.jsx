import React, { useState, useEffect } from 'react';
import { Container } from 'react-floating-action-button';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import PatternInfo from '../../components/PatternInfo';
import Review from '../../components/PatternReview';
import relatedPatterns from '../../placeholders/PlaceholderPatterns';
import {
  MainPageSection,
} from './style';

export default function PatternInfoPage() {
  const [pattern, setPattern] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/patterns/${id}`).then((res) => {
      setPattern(res.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <MainPageSection>
      <Row>
        <Col key={pattern.title} className="mb-3">
          <PatternInfo
            title={pattern.title}
            section=""
            stars={pattern.stars}
            image={pattern.image}
            intro={pattern.intro}
            problem={pattern.problem}
            solution={pattern.solution}
            relatedList={relatedPatterns}
          />
        </Col>
      </Row>
      <Container>
        <Review patletId={id} icon="fas fa-plus" class="position-absolute" />
      </Container>
    </MainPageSection>
  );
}
