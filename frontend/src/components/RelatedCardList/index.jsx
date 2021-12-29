import React from 'react';
import { Col } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { CardRow } from '../PatternCardList/style';
import RespPatternCard from '../RespPatternCard';

export default function RelatedCardList({
  patterns,
  setFavoriteIds,
  setBookmarkIds,
}) {
  return (
    <CardRow>
      {patterns.map((pattern) => (
        <Col xs={12} md={4} lg={3} key={pattern.id} className="mt-3 mb-3">
          <RespPatternCard
            id={pattern.id}
            title={pattern.title}
            favorite={pattern.favorite}
            saved={pattern.saved}
            image={pattern.image}
            stars={pattern.stars}
            setFavoriteIds={setFavoriteIds}
            setBookmarkIds={setBookmarkIds}
          />
        </Col>
      ))}
    </CardRow>
  );
}

RelatedCardList.propTypes = {
  patterns: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavoriteIds: PropTypes.func.isRequired,
  setBookmarkIds: PropTypes.func.isRequired,
};
