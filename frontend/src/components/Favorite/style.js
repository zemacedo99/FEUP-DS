import {
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';

import styled from 'styled-components';

export const FillStar = styled(AiFillStar)`
  background-color: #FFFFFFBF;
  border-radius: 50%;
  font-size: 30px;
  &:hover {
    color: green;
    background-color: #ffffff;
  }
`;

export const OutlineStar = styled(AiOutlineStar)`
  background-color: #FFFFFFBF;
  border-radius: 50%;
  font-size: 30px;
  &:hover {
    color: green;
    background-color: #ffffff;
  }
`;
