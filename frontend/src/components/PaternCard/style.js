import { Card } from 'react-bootstrap';
import { IoEllipsisHorizontal } from 'react-icons/all';

import styled from 'styled-components';

export const PatCard = styled(Card)`
  background: #F9FAFB;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  font-size: 20px;
  border: 1px solid white; 
  cursor: pointer;
  &:hover {
    border: 1px solid black; 
  }
`;

export const CardTitle = styled(Card.Title)`
  color: #232323;
`;

export const Icon = styled(IoEllipsisHorizontal)`
  color: white;
  font-size: 34px;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-25%, 10%);
  &:hover {
    color: black;
  }
`;

export const OptionsSection = styled.div`
  z-index: 100;
`;

export const Options = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(70%, 30%);
  padding: 1em;
  font-size: 16px;
`;

export const Option = styled.div`
  margin-bottom: 0;
  padding-bottom: 0.3em;
  &:hover {
    font-weight: bold;
  }
  width: 8em;
`;
