import React from 'react';
import { Col } from 'react-bootstrap';

import PropTypes from 'prop-types';

import PatternCard from '../PaternCard';
import { CardRow } from './style';

export default function PatternCardList({ patterns }) {
  return (
    <CardRow>
      {patterns.map((pattern) => (
        <Col xs={6} md={4} lg={3} key={pattern.id} className="mt-3 mb-3">
          <PatternCard
            id={pattern.id}
            name={pattern.name}
            image={pattern.image}
          />
        </Col>
      ))}
    </CardRow>
  );
}

PatternCardList.propTypes = {
  patterns: PropTypes.arrayOf(PropTypes.object).isRequired,
};
