import React from 'react';
import { Col } from 'react-bootstrap';

import PropTypes from 'prop-types';

import PatternCard from '../PatternCard';
import { CardRow } from './style';

export default function PatternCardList({
  patterns,
  updatePattern,
  setFavoriteIds,
  setBookmarkIds,
  half,
  className,
}) {
  return (
    <CardRow className={className}>
      {patterns.map((pattern) => (
        <Col xs={half ? 12 : 6} md={half ? 12 : 4} lg={half ? 6 : 3} key={pattern.id} className="mt-3 mb-3">
          <PatternCard
            id={pattern.id}
            title={pattern.title}
            favorite={pattern.favorite}
            saved={pattern.saved}
            image={pattern.image}
            updatePattern={updatePattern}
            setFavoriteIds={setFavoriteIds}
            setBookmarkIds={setBookmarkIds}
          />
        </Col>
      ))}
    </CardRow>
  );
}

PatternCardList.propTypes = {
  patterns: PropTypes.arrayOf(PropTypes.object).isRequired,
  updatePattern: PropTypes.func.isRequired,
  setFavoriteIds: PropTypes.func.isRequired,
  setBookmarkIds: PropTypes.func.isRequired,
  half: PropTypes.bool,
  className: PropTypes.string,
};

PatternCardList.defaultProps = {
  half: false,
  className: '',
};
