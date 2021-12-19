import React from 'react';
import { Col } from 'react-bootstrap';

import PropTypes from 'prop-types';

import RespPatternCard from '../RespPatternCard';
import { CardRow } from '../PatternCardList/style';

export default function RelatedCardList({ patterns, updatePattern }) {
  return (
    <CardRow>
      {patterns.map((pattern) => (
        <Col xs={12} md={4} lg={3} key={pattern.id} className="mt-3 mb-3">
          <RespPatternCard
            id={pattern.id}
            name={pattern.name}
            favorite={pattern.favorite}
            saved={pattern.saved}
            image={pattern.image}
            updatePattern={updatePattern}
            stars={3}
          />
        </Col>
      ))}
    </CardRow>
  );
}

RelatedCardList.propTypes = {
  patterns: PropTypes.arrayOf(PropTypes.object).isRequired,
  updatePattern: PropTypes.func.isRequired,
};
