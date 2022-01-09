import React from 'react';
import { Card } from 'react-bootstrap';
import {
  AiFillStar,
} from 'react-icons/all';

import PropTypes from 'prop-types';

import { Bookmark } from '../Bookmark/index';
import { Favorite } from '../Favorite/index';
import {
  PatCard, CardTitle, CardStars, FavDiv, SaveDiv, CardImage,
} from './style';

export default function RespPatternCard({
  id, title, image, stars, setFavoriteIds, setBookmarkIds,
}) {
  const goToPattern = () => {}; // TODO

  const printStars = [];

  for (let i = 0; i < stars; i += 1) {
    printStars.push(<AiFillStar className="me-2" key={i} size={19} style={{ fill: '#FEC84B', stroke: '#404040', strokeWidth: 50 }} />);
  }

  return (
    <PatCard title="See pattern">
      <CardImage>
        <Card.Img style={{ objectFit: 'contain', height: '10em' }} variant="top" src={image} alt="pattern's image" onClick={goToPattern} />
      </CardImage>
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
        <CardStars>{printStars}</CardStars>
      </Card.Body>
    </PatCard>
  );
}

RespPatternCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  setFavoriteIds: PropTypes.func.isRequired,
  setBookmarkIds: PropTypes.func.isRequired,
};
