import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import PatternInfo from '../../components/PatternInfo';
// import relatedPatterns from '../../placeholders/PlaceholderPatterns';

export default function PatternInfoPage() {
  const [pattern, setPattern] = useState();
  const { id } = useParams();
  const list = [];
  const list2 = [];
  let index = 0;
  const [relatedPatterns1, setRelatedPatterns1] = useState([]);
  const [relatedPatterns2, setRelatedPatterns2] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/patterns/${id}`).then((res) => {
      setPattern(res.data);
      index = 0;
      if (res.data.graph_po !== undefined) {
        res.data.graph_po.map((patlet) => (
          axios.get(`${process.env.REACT_APP_URL}${patlet}`).then((res1) => {
            list.splice(index, 1, res1.data);
            index += 1;
            setRelatedPatterns1([...list]);
          })));
      }
      if (res.data.graph_vs !== undefined) {
        index = 0;
        res.data.graph_vs.map((patlet) => (
          axios.get(`${process.env.REACT_APP_URL}${patlet}`).then((res1) => {
            list2.splice(index, 1, res1.data);
            index += 1;
            setRelatedPatterns2([...list2]);
          })));
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  // Return nothing until Firebase request is finished
  // TODO replace for spinner later

  if (!pattern) return ('');

  return (

    <Col key={pattern.title} className="mb-3">
      <PatternInfo
        title={pattern.title}
        section="Pattern Section Not Defined Yet"
        stars={pattern.stars}
        image={pattern.image}
        intro={pattern.introduction}
        problem={pattern.problem}
        solution={pattern.solution}
        relatedList1={relatedPatterns1}
        relatedList2={relatedPatterns2}
      />
    </Col>

  );
}
