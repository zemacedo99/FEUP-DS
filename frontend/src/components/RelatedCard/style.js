import { Card, Col } from 'react-bootstrap';

import styled from 'styled-components';

export const RelatedCard = styled(Card)`
  background: #F9FAFB;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  font-size: 20px;
  border: 1px solid white; 
  cursor: pointer;
  &:hover {
    border: 1px solid black; 
  }
  margin: 1em 0em;
  display: flex;
  flex-direction: row;
`;

export const CardTitle = styled(Col)`
  color: #232323;
`;

export const CardStars = styled(Col)`
  color: #232323;
`;
