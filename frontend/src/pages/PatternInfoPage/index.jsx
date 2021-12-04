import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PatternInfo from '../../components/PatternInfo';
import {
  MainPageSection,
} from './style';

export default function PatternInfoPage() {
  const pattern = {
    title: 'The Spirit of the Game',
    section: 'Product Organization Pattern Language',
    stars: '2',
    image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    intro: '...the Scrum framework does not have all the answers, which means that the team cannot look to Scrum for direction when it does not give a final answer.',
    problem: 'Written rules might give concrete guidance for how to work together, but spirit is part of culture that guides interactions and may be discerned only when ignored or violated.',
    solution: 'When using Scrum, the product community must focus on explicitly creating a culture in the organization where people know and follow the spirit of Scrum.',
    related: 'related',
  };

  return (
    /* NavBar */
    <MainPageSection>
      <Row>
        <Col key={pattern.title} className="mt-3 mb-3">
          <PatternInfo
            title={pattern.title}
            section={pattern.section}
            stars={pattern.stars}
            image={pattern.image}
            intro={pattern.intro}
            problem={pattern.problem}
            solution={pattern.solution}
            related={pattern.related}
          />
        </Col>
      </Row>
    </MainPageSection>
  );
}
