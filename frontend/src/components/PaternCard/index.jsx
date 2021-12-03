import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/all';

import PropTypes from 'prop-types';

import {
  PatCard, CardTitle, Icon, OptionsSection, Options, Option,
} from './style';

export default function PatternCard({
  id, name, image, showOptionsId, setShowOptionsId,
}) {
  const openOptions = (event) => {
    event.stopPropagation();
    setShowOptionsId(id);
  };

  return (
    <PatCard title="See pattern">
      <Card.Img variant="top" src={image} alt="pattern's image" />
      <OptionsSection>
        <Icon onClick={(e) => openOptions(e)} />
        <Options className={showOptionsId === id ? 'd-block' : 'd-none'}>
          <Option onClick={(event) => event.stopPropagation()}>
            <AiOutlineStar />
            <span> Favorite </span>
          </Option>
          <Option onClick={(event) => event.stopPropagation()}>
            <AiOutlineClockCircle />
            <span> Save for later </span>
          </Option>
        </Options>
      </OptionsSection>
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
  showOptionsId: PropTypes.number.isRequired,
  setShowOptionsId: PropTypes.func.isRequired,
};
