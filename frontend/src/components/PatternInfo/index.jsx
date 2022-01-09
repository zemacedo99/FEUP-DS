import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import {
  AiFillStar,
} from 'react-icons/all';

import PropTypes from 'prop-types';

import RelatedCardList from '../RelatedCardList';
import {
  MainPageSection, PatTitle, PatSection, PatStars, PatIntro, PatProblem, PatSolution,
  SubTitle, PatImage, RelatedSection,
} from './style';

export default function PatternInfo({
  title, section, stars, image, intro, problem, solution, relatedList1, relatedList2,
}) {
  const rows = [];
  for (let i = 0; i < stars; i += 1) {
    rows.push(<AiFillStar className="me-2" key={i} size={23} style={{ fill: '#FEC84B', stroke: '#404040', strokeWidth: 50 }} />);
  }
  const setFavoriteIds = useState(JSON.parse(localStorage.getItem('favorites')))[1];
  const setBookmarkIds = useState(JSON.parse(localStorage.getItem('bookmarks')))[1];

  return (
    <MainPageSection>
      <Row>
        <PatTitle>
          {title}
        </PatTitle>
        <SubTitle>
          <PatSection>
            {section}
          </PatSection>
          <PatStars>
            {rows}
          </PatStars>
        </SubTitle>
      </Row>
      <Row>
        <PatImage src={image} alt="pattern" rounded fluid className="mt-3 mb-5" />
        <PatIntro>
          {intro}
        </PatIntro>
        <br />
        <PatProblem>
          {problem}
        </PatProblem>
        <br />
        <PatSolution>
          {solution}
        </PatSolution>
        <PatSection className="mt-5">
          Related Patterns
        </PatSection>
        {relatedList1.length > 0 ? <RelatedSection className="mt-2">Product Organization</RelatedSection> : null}
        <RelatedCardList className="my-component" patterns={relatedList1} setFavoriteIds={setFavoriteIds} setBookmarkIds={setBookmarkIds} />
        {relatedList2.length > 0 ? <RelatedSection className="mt-2">Value Stream</RelatedSection> : null}
        <RelatedCardList className="my-component" patterns={relatedList2} setFavoriteIds={setFavoriteIds} setBookmarkIds={setBookmarkIds} />
      </Row>
    </MainPageSection>
  );
}

PatternInfo.propTypes = {
  title: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  problem: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  relatedList1: PropTypes.arrayOf(PropTypes.object).isRequired,
  relatedList2: PropTypes.arrayOf(PropTypes.object).isRequired,
};
