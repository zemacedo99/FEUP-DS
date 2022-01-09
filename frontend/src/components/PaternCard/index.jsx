import React from 'react';
import { Card } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { Bookmark } from '../Bookmark/index';
import { Favorite } from '../Favorite/index';
import {
  PatCard,
  CardTitle,
  FavDiv,
  SaveDiv,
} from './style';

export default function PatternCard({
  id, title, image, setFavoriteIds, setBookmarkIds,
}) {
  const goToPattern = () => {};

  return (
    <PatCard title="See pattern">
      <Card.Img variant="top" style={{ objectFit: 'contain', height: '10em' }} src={image} alt="pattern's image" onClick={goToPattern} />
      <FavDiv role="button">
        <Favorite patlet_id={id} setFavoriteIds={setFavoriteIds} />
      </FavDiv>
      <SaveDiv role="button">
        <Bookmark
          patlet_id={id}
          setBookmarkIds={setBookmarkIds}
        />
      </SaveDiv>
      <Card.Body onClick={goToPattern}>
        <CardTitle>{title}</CardTitle>
      </Card.Body>
    </PatCard>
  );
}

PatternCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  setFavoriteIds: PropTypes.func.isRequired,
  setBookmarkIds: PropTypes.func.isRequired,
};
