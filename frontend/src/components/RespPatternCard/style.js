import { Card, Dropdown } from 'react-bootstrap';
import { IoEllipsisHorizontal } from 'react-icons/all';

import styled from 'styled-components';

export const PatCard = styled(Card)`
  background: #F9FAFB;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  font-size: 20px;
  border: 1px solid white; 
  cursor: pointer;
  margin: 1em;
  &:hover {
    border: 1px solid black; 
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
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
  @media only screen and (max-width: 768px) {
    display:none
  }
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

export const CardImage = styled.div`
  @media only screen and (max-width: 768px) {
    display:none
  }
  max-height:100px;
`;

export const CardStars = styled.div`
    order: 1;
    flex-grow: 0;
    @media only screen and (min-width: 768px) {
        display:none
    }
`;

export const FavDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(10%, 10%);
  @media only screen and (max-width: 768px) {
    display:none
  }
`;

export const SaveDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-10%, 10%);
  @media only screen and (max-width: 768px) {
    display:none
  }
`;
