import {
  MdOutlineBookmark,
  MdOutlineBookmarkBorder,
} from 'react-icons/md';

import styled from 'styled-components';

export const FillBookmarkCircle = styled(MdOutlineBookmark)`
  background-color: #FFFFFFBF;
  border-radius: 50%;
  font-size: 30px;
  &:hover {
    background-color: #ffffff;
  }
`;

export const OutlineBookmarkCircle = styled(MdOutlineBookmarkBorder)`
  background-color: #FFFFFFBF;
  border-radius: 50%;
  font-size: 30px;
  &:hover {
    background-color: #ffffff;
  }
`;
