import React from 'react';
import { Card } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { PatCard, CardTitle, Icon } from './style';

export default function PatternCard({ id, name, image }) {
  console.log(id);
  return (
    <PatCard title="See pattern">
      <Card.Img variant="top" src={image} />
      <Icon />
      <Card.Body>
        <CardTitle>{name}</CardTitle>
      </Card.Body>
    </PatCard>
  );
}

PatternCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
