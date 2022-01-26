import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import ReactGA from 'react-ga';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import PatternInfo from '../../components/PatternInfo';
import Page404 from '../Page404';
import {
  MainPageSection,
} from './style';

export default function PatternInfoPage() {
  const [successful, setSuccessful] = useState(true);
  const [loading, setLoading] = useState(true);
  const [pattern, setPattern] = useState();
  const { id } = useParams();
  const list = [];
  const list2 = [];
  let index = 0;
  const [relatedPatternsPO, setRelatedPatternsPO] = useState(null);
  const [relatedPatternsVS, setRelatedPatternsVS] = useState(null);

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
            setRelatedPatternsPO([...list]);
          })));
      } else setRelatedPatternsPO([]);
      if (res.data.graphVs !== undefined) {
        index = 0;
        res.data.graphVs.map((patlet) => (
          axios.get(`${process.env.REACT_APP_URL}${patlet}`).then((res1) => {
            list2.splice(index, 1, res1.data);
            index += 1;
            setRelatedPatternsVS([...list2]);
          })));
      } else setRelatedPatternsVS([]);
      setLoading(false);
    }).catch((error) => {
      setSuccessful(false);
      console.error(error);
    });
  }, [id]);

  if (!successful) return <Page404 />;

  return loading ? (
    <MainPageSection>
      <Row className="mt-5 d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Row>
    </MainPageSection>
  ) : (
    <MainPageSection>
      <Row>
        <Col key={pattern.title} className="mb-3">
          <PatternInfo
            id={pattern.id}
            title={pattern.title}
            languages={pattern.languages}
            stars={pattern.stars}
            image={pattern.image}
            intro={pattern.introduction}
            problem={pattern.problem}
            solution={pattern.solution}
            relatedPatternsPO={relatedPatternsPO}
            relatedPatternsVS={relatedPatternsVS}
            link={pattern.link}
          />
        </Col>
      </Row>
    </MainPageSection>
  );
}
