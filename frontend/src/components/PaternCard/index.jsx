import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Bookmark } from '../Bookmark/index';
import { Favorite } from '../Favorite/index';
import ProgressiveImg from '../ProgressiveImage/index';
import {
  PatCard, CardTitle, FavDiv, SaveDiv,
} from './style';

export default function PatternCard({
  id, title, image, setFavoriteIds, setBookmarkIds,
}) {
  const navigate = useNavigate();
  const navigateToPattern = () => {
    navigate(`/pattern/${id}/patlet`);
  };

  const [src, { blur }] = ProgressiveImg('../assets/placeholder.jpg', image);
  return (
    <PatCard title="See pattern">
      <Card.Img variant="top" src={src} style={{ filter: blur ? 'blur(20px)' : 'none', transition: blur ? 'none' : 'filter 0.3s ease-out' }} alt="pattern's image" onClick={goToPattern} />

      <FavDiv role="button">
        <Favorite patlet_id={id} setFavoriteIds={setFavoriteIds} />
      </FavDiv>
      <SaveDiv role="button">
        <Bookmark
          patlet_id={id}
          setBookmarkIds={setBookmarkIds}
        />
      </SaveDiv>
      <Card.Body onClick={navigateToPattern}>
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
