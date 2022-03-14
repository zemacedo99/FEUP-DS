import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import PropTypes from 'prop-types';

import PatternCard from '../PatternCard';

export default function RelatedCardList({
  patterns,
  setFavoriteIds,
  setBookmarkIds,
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      partialVisible
      responsive={responsive}
    >
      {patterns.map((pattern) => (
        <div key={pattern.id} className="m-2">
          <PatternCard
            id={pattern.id}
            title={pattern.title}
            image={pattern.image}
            setFavoriteIds={setFavoriteIds}
            setBookmarkIds={setBookmarkIds}
          />
        </div>
      ))}
    </Carousel>
  );
}

RelatedCardList.propTypes = {
  patterns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setFavoriteIds: PropTypes.func.isRequired,
  setBookmarkIds: PropTypes.func.isRequired,
};
