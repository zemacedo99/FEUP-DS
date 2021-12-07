import React from 'react';
import { Card, Row } from 'react-bootstrap';
import {
  AiFillStar,
} from 'react-icons/all';

import PropTypes from 'prop-types';

import {
  RelatedCard, CardTitle, CardStars,
} from './style';

export default function PatternCard({
  name, stars,
}) {
  const goToPattern = () => {
    console.log(name);
  };
  const rows = [];
  for (let i = 0; i < stars; i += 1) {
    rows.push(<AiFillStar className="me-2" key={i} size={20} style={{ fill: 'white', stroke: '#404040', strokeWidth: 50 }} />);
  }
  return (
    <RelatedCard title="See pattern">
      <Card.Body onClick={goToPattern}>
        <Row>
          <CardTitle>{name}</CardTitle>
          <CardStars>{rows}</CardStars>
        </Row>
      </Card.Body>
    </RelatedCard>
  );
}

PatternCard.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
};
