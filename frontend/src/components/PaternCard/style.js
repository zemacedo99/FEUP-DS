import { Card, Dropdown } from 'react-bootstrap';
import { IoEllipsisHorizontal } from 'react-icons/io5';

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
  /*position: absolute;
  right: 0;
  top: 0;
  transform: translate(-25%, 10%);*/
  &:hover {
    color: black;
  }
`;

export const DropdownSection = styled(Dropdown)`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-25%, 10%);
  z-index: 100
`;

export const Toggle = styled(Dropdown.Toggle)`
  background: none;
  border: none;
  padding: 0;
  &::after {
    display: none;
  }
  &:hover, &:active {
    background: none;
    box-shadow: none !important;
    border: none;
    outline: none !important;
  }
  &:focus {
    border:none;
    box-shadow: none;
    outline: none !important;
  }
`;

export const DropdownItem = styled(Dropdown.Item)`
  &:active {
    background-color: transparent;
    color: black;
  }
`;
