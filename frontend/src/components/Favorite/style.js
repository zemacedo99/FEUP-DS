import {
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';

import styled from 'styled-components';

export const FillStar = styled(AiFillStar)`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  font-size: 30px;
  &:hover {
    color: #7F56D9;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const OutlineStar = styled(AiOutlineStar)`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  font-size: 30px;
  &:hover {
    color: #7F56D9;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
