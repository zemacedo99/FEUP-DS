import React from 'react';
import { Row, Image } from 'react-bootstrap';
import {
  AiFillStar,
} from 'react-icons/all';

import PropTypes from 'prop-types';
import RelatedCardList from '../RelatedCardList';

import {
  MainPageSection, PatTitle, PatSection, PatStars, PatIntro, PatProblem, PatSolution,
  SubTitle,
} from './style';

export default function PatternInfo({
  title, section, stars, image, intro, problem, solution, relatedList,
}) {
  const rows = [];
  for (let i = 0; i < stars; i += 1) {
    rows.push(<AiFillStar className="me-2" key={i} size={23} style={{ fill: '#FEC84B', stroke: '#404040', strokeWidth: 50 }} />);
  }

  const updatePattern = () => {
  };
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
        <Image src={image} alt="pattern" rounded fluid className="p-5" />
        <PatIntro>
          {intro}
        </PatIntro>
        <PatProblem>
          {problem}
        </PatProblem>
        <PatSolution>
          {solution}
        </PatSolution>
        <PatSection className="mt-5">
          Related Patterns
        </PatSection>
        <RelatedCardList className="my-component" patterns={relatedList} updatePattern={updatePattern} />
      </Row>
    </MainPageSection>
  );
}

PatternInfo.propTypes = {
  title: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  problem: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  relatedList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
