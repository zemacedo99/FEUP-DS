import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-floating-action-button';
import ReactGA from 'react-ga';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import PatternInfo from '../../components/PatternInfo';
import PatternReview from '../../components/PatternReview';
import {
  MainPageSection,
} from './style';

export default function PatternInfoPage() {
  const [loading, setLoading] = useState(false);
  const [pattern, setPattern] = useState();
  const { id } = useParams();
  const list = [];
  const list2 = [];
  let index = 0;
  const [relatedPatterns1, setRelatedPatterns1] = useState([]);
  const [relatedPatterns2, setRelatedPatterns2] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_URL}/patterns/${id}`).then((res) => {
      setPattern(res.data);
      document.title = res.data.title;
      ReactGA.pageview(`/pattern/${id}/patlet`, undefined, res.data.title);
      index = 0;
      if (res.data.graphPo !== undefined) {
        res.data.graphPo.map((patlet) => (
          axios.get(`${process.env.REACT_APP_URL}${patlet}`).then((res1) => {
            list.splice(index, 1, res1.data);
            index += 1;
            setRelatedPatterns1([...list]);
          })));
      }
      if (res.data.graphVs !== undefined) {
        index = 0;
        res.data.graphVs.map((patlet) => (
          axios.get(`${process.env.REACT_APP_URL}${patlet}`).then((res1) => {
            list2.splice(index, 1, res1.data);
            index += 1;
            setRelatedPatterns2([...list2]);
          })));
      }
      setLoading(false);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  // Return nothing until Firebase request is finished
  // TODO replace for spinner later

  if (!pattern) return ('');

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
              intro={pattern.introduction}
              problem={pattern.problem}
              solution={pattern.solution}
              relatedList1={relatedPatterns1}
              relatedList2={relatedPatterns2}
            />
          </Col>
        </Row>
      )}

      <Container>
        <PatternReview patletId={id} icon="fas fa-plus" class="position-absolute" />
      </Container>
    </MainPageSection>
  );
}
