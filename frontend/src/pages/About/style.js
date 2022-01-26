import { Button } from 'react-bootstrap';

import styled from 'styled-components';

export const ContributeButton = styled(Button)`
  @media screen and (max-width: 1200px) { 
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;
