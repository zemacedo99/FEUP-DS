import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import PatternInfo from '../../components/PatternInfo';
import relatedPatterns from '../../placeholders/PlaceholderPatterns';
import {
  MainPageSection,
} from './style';

export default function PatternInfoPage() {
  const [loading, setLoading] = useState(false);
  const [pattern, setPattern] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_URL}/patterns/${id}`).then((res) => {
      setPattern(res.data);
      setLoading(false);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <MainPageSection>
      { loading ? (
        <Row className="mt-5 d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      ) : (
        <Row>
          <Col key={pattern.title} className="mb-3">
            <PatternInfo
              id={pattern.id}
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
      )}
    </MainPageSection>
  );
}
