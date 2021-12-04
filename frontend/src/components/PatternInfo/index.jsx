import React from 'react';

import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import {
  MainPageSection, PatTitle, PatSection, PatStars, PatImage, PatIntro, PatProblem, PatSolution,
} from './style';

export default function PatternInfo({
  title, section, stars, image, intro, problem, solution, related,
}) {
  return (
    <MainPageSection>
      <Row>
        <PatTitle>
          {title}
        </PatTitle>
        <PatSection>
          {section}
        </PatSection>
        <PatStars>
          {stars}
        </PatStars>
      </Row>
      <Row>
        <PatImage>
          <img src={image} alt="pattern" />
        </PatImage>
        <PatIntro>
          {intro}
        </PatIntro>
        <PatProblem>
          {problem}
        </PatProblem>
        <PatSolution>
          {solution}
        </PatSolution>
        {related}
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
  related: PropTypes.string.isRequired,
};
