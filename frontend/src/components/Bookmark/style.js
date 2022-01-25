import {
  MdOutlineBookmark,
  MdOutlineBookmarkBorder,
} from 'react-icons/md';

import styled from 'styled-components';

export const FillBookmarkCircle = styled(MdOutlineBookmark)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 30px;
  &:hover {
    color: #7F56D9;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const OutlineBookmarkCircle = styled(MdOutlineBookmarkBorder)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 30px;
  &:hover {
    color: #7F56D9;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
