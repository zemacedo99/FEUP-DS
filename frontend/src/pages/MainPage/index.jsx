import React from 'react';
import { Col, Row } from 'react-bootstrap';

import infoIcon from '../../assets/infoIcon.svg';
import PatternCard from '../../components/PaternCard';
import {
  MainPageSection, Title, SubTitle, CardRow,
} from './style';

export default function MainPage() {
  const patterns = [
    {
      id: 1,
      name: 'Teams That Finish Earlier Accelerate Faster',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 2,
      name: 'Teams That Finish Earlier Accelerate Faster',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 3,
      name: 'Teams That Finish Earlier Accelerate Faster',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 4,
      name: 'Teams That Finish Earlier Accelerate Faster',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 5,
      name: 'Teams That Finish Earlier Accelerate Faster',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 6,
      name: 'Teams That Finish Earlier Accelerate Faster',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 7,
      name: 'Teams That Finish Earlier Accelerate Faster',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 8,
      name: 'Teams That Finish Earlier Accelerate Faster',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
  ];

  return (
    <MainPageSection>
      <Row>
        <Col>
          <Title> Home </Title>
        </Col>
        <Col className="d-flex justify-content-end pe-4">
          <img src={infoIcon} width="50px" alt="info icon" title="Help" style={{ cursor: 'pointer' }} />
        </Col>
      </Row>
      <SubTitle> The core of Scrum </SubTitle>
      <CardRow>
        {patterns.map((pattern) => (
          <Col xs={6} md={4} lg={3} key={pattern.id} className="mt-3 mb-3">
            <PatternCard
              id={pattern.id}
              name={pattern.name}
              image={pattern.image}
            />
          </Col>
        ))}
      </CardRow>
    </MainPageSection>
  );
}
