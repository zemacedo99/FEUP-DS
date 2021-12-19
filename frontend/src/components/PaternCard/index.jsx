import React from 'react';
import { Card } from 'react-bootstrap';

import PropTypes from 'prop-types';

import {
  PatCard,
  CardTitle,
  FavDiv,
  SaveDiv,
  FillClockCircle, FillStar, OutlineStar, OutlineClockCircle,
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
      {favorite ? (
        <FavDiv onClick={(event) => favoriteButton(event)} onKeyPress={(event) => favoriteButton(event)} role="button" tabIndex={0}>
          <FillStar title="Unfavorite" />
        </FavDiv>
      )
        : (
          <FavDiv onClick={(event) => favoriteButton(event)} onKeyPress={(event) => favoriteButton(event)} role="button" tabIndex={0}>
            <OutlineStar title="Favorite" />
          </FavDiv>
        )}
      {saved ? (
        <SaveDiv onClick={(event) => saveButton(event)} onKeyPress={(event) => saveButton(event)} role="button" tabIndex={0}>
          <FillClockCircle title="Unsave" />
        </SaveDiv>
      )
        : (
          <SaveDiv onClick={(event) => saveButton(event)} onKeyPress={(event) => saveButton(event)} role="button" tabIndex={0}>
            <OutlineClockCircle title="Save for later" />
          </SaveDiv>
        )}
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
