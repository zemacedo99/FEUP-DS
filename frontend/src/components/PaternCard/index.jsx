import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { Bookmark } from '../Bookmark/index';
import { Favorite } from '../Favorite/index';
import {
  PatCard, CardTitle, Icon, Toggle, DropdownSection, DropdownItem,
} from './style';

export default function PatternCard({
  id, name, image,
}) {
  const goToPattern = () => {}; // TODO

  return (
    <PatCard title="See pattern">
      <Card.Img variant="top" src={image} alt="pattern's image" onClick={goToPattern} />
      <DropdownSection>
        <Toggle title="See options" variant="outline-light">
          <Icon />
        </Toggle>
        <Dropdown.Menu>
          <DropdownItem className="d-flex align-items-center">
            <Favorite patlet_id={id} />
          </DropdownItem>
          <DropdownItem className="d-flex align-items-center">
            <Bookmark patlet_id={id} />
          </DropdownItem>
        </Dropdown.Menu>
      </DropdownSection>
      <Card.Body onClick={goToPattern}>
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
