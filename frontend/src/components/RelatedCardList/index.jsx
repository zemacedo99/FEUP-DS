import React from 'react';
// import { Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import PropTypes from 'prop-types';

// import { CardRow } from '../PatternCardList/style';
import RespPatternCard from '../RespPatternCard';

export default function RelatedCardList({
  patterns,
  setFavoriteIds,
  setBookmarkIds,
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      swipeable
      centerMode
      draggable
      responsive={responsive}
      ssr // means to render carousel on server-side.
      infinite
      keyBoardControl
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {patterns.map((pattern) => (
        <div>
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
        </div>
      ))}
    </Carousel>
  );
}

RelatedCardList.propTypes = {
  patterns: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavoriteIds: PropTypes.func.isRequired,
  setBookmarkIds: PropTypes.func.isRequired,
};
