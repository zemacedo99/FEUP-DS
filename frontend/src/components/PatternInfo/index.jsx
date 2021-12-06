import React from 'react';

import { Row, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
  AiFillStar,
} from 'react-icons/all';

import RelatedCard from '../RelatedCard';

import {
  MainPageSection, PatTitle, PatSection, PatStars, PatIntro, PatProblem, PatSolution,
  SubTitle,
} from './style';

export default function PatternInfo({
  /* ToDo: Related */
  title, section, stars, image, intro, problem, solution,
}) {
  const rows = [];
  for (let i = 0; i < stars; i += 1) {
    rows.push(<AiFillStar className="me-2" key={i} size={30} />);
  }
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
        <RelatedCard name="The Spirit of the Game" stars="3" />
        <RelatedCard name="Teams That Finish Earlier Accelerate Faster" stars="1" />
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
};
