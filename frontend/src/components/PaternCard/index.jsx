import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/all';

import PropTypes from 'prop-types';

import {
  PatCard, CardTitle, Icon, Toggle, DropdownSection, DropdownItem,
} from './style';

export default function PatternCard({
  // eslint-disable-next-line no-unused-vars
  id, name, image,
}) {
  return (
    <PatCard title="See pattern">
      <Card.Img variant="top" src={image} alt="pattern's image" />
      <DropdownSection>
        <Toggle title="See options" variant="outline-light">
          <Icon />
        </Toggle>
        <Dropdown.Menu>
          <DropdownItem href="#">
            <AiOutlineStar className="me-2" />
            <span>Favorite </span>
          </DropdownItem>
          <DropdownItem href="#">
            <AiOutlineClockCircle className="me-2" />
            Save for later
          </DropdownItem>
        </Dropdown.Menu>
      </DropdownSection>
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
