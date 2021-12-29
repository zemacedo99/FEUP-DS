import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import PatternInfo from '../../components/PatternInfo';
// import relatedPatterns from '../../placeholders/PlaceholderPatterns';
import {
  MainPageSection,
} from './style';

export default function PatternInfoPage() {
  const [pattern, setPattern] = useState();
  const { id } = useParams();
  const list = [];
  let index = 0;
  const [relatedPatterns, setRelatedPatterns] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/patterns/${id}`).then((res) => {
      setPattern(res.data);
      index = 0;
      res.data.linkedPatlets.map((patlet) => (
        axios.get(`${process.env.REACT_APP_URL}${patlet}`).then((res1) => {
          list.splice(index, 1, res1.data);
          index += 1;
          setRelatedPatterns([...list]);
        })));
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  // Return nothing until Firebase request is finished
  // TODO replace for spinner later

  if (!pattern) return ('');

  return (
    <MainPageSection>
      <Row>
        <Col key={pattern.title} className="mb-3">
          <PatternInfo
            title={pattern.title}
            section="Pattern Section Not Defined Yet"
            stars={pattern.stars}
            image={pattern.image}
            intro={pattern.introduction}
            problem={pattern.problem}
            solution={pattern.solution}
            relatedList={relatedPatterns}
          />
        </Col>
      </Row>
    </MainPageSection>
  );
}
