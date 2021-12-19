import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import {
  AiFillClockCircle,
  AiFillStar,
  AiOutlineClockCircle,
  AiOutlineStar,
} from 'react-icons/all';

import PropTypes from 'prop-types';

import {
  PatCard, CardTitle, Icon, Toggle, DropdownSection, DropdownItem,
} from './style';

export default function PatternCard({
  id, name, image, favorite, saved, updatePattern,
}) {
  const goToPattern = () => {}; // TODO

  const buildPattern = (newFav, newSaved) => ({
    id,
    name,
    favorite: newFav,
    saved: newSaved,
    image,
  });

  const favoriteButton = (event) => {
    event.stopPropagation();
    const pattern = buildPattern(!favorite, saved);
    updatePattern(pattern);
  };

  const saveButton = (event) => {
    event.stopPropagation();
    updatePattern(buildPattern(favorite, !saved));
  };

  return (
    <PatCard title="See pattern">
      <Card.Img variant="top" src={image} alt="pattern's image" onClick={goToPattern} />
      <DropdownSection>
        <Toggle title="See options" variant="outline-light">
          <Icon />
        </Toggle>
        <Dropdown.Menu>
          {favorite ? (
            <DropdownItem onClick={(event) => favoriteButton(event)} className="d-flex align-items-center">
              <AiFillStar className="me-2" />
              <span>Unfavorite</span>
            </DropdownItem>
          )
            : (
              <DropdownItem onClick={(event) => favoriteButton(event)} className="d-flex align-items-center">
                <AiOutlineStar className="me-2" />
                <span>Favorite</span>
              </DropdownItem>
            )}
          {saved ? (
            <DropdownItem onClick={(event) => saveButton(event)} className="d-flex align-items-center">
              <AiFillClockCircle className="me-2" />
              Unsave
            </DropdownItem>
          )
            : (
              <DropdownItem onClick={(event) => saveButton(event)} className="d-flex align-items-center">
                <AiOutlineClockCircle className="me-2" />
                Save for later
              </DropdownItem>
            )}
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
  favorite: PropTypes.bool.isRequired,
  saved: PropTypes.bool.isRequired,
  updatePattern: PropTypes.func.isRequired,
};
