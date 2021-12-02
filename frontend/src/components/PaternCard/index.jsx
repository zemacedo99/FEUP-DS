import React from 'react';
import { Card } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { PatCard } from './style';

export default function PatternCard({ id, name, image }) {
  console.log(id);
  return (
    <PatCard>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </PatCard>
  );
}

PatternCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
