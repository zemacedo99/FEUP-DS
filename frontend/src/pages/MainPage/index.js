import React from 'react';
import { Col } from 'react-bootstrap';

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
      <Title>Home</Title>
      <SubTitle> The core of Scrum </SubTitle>
      <CardRow>
        {patterns.map((pattern) => (
          <Col xs={6} md={4} lg={3} key={pattern.id} className="mt-3">
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
