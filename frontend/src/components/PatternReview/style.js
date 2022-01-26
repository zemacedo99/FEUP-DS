import { Button } from 'react-bootstrap';
import { AiOutlineCheck } from 'react-icons/ai';

import styled from 'styled-components';

export const FeedbackPopup = styled.div`
  background-color: white;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #7F56D9;
  padding: 2em;
  border-radius: 1em;
`;

export const Check = styled(AiOutlineCheck)`
    background: #E9D7FE;
    color: #6941C6;
    font-size: 40px;
    border-radius: 10px;
    &:hover {
      color: #6941C6;
      background: rgba(233, 215, 254, 0.6);
    }
`;

export const CustomButton = styled(Button)`
    border: none !important;
    background-color: transparent !important;
    padding: 0 !important;
    width: fit-content !important;
    &:hover {
      color: #6941C6;
      background: rgba(233, 215, 254, 0.6);
    }
`;
