import { Row } from 'react-bootstrap';

import styled from 'styled-components';

export const MainPageSection = styled.div`
  font-family: Inter;
  margin: 3em;
  @media only screen and (max-width: 768px) {
    margin:1em;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 30px !important;
`;

export const SubTitle = styled.h1`
  font-size: 30px;
  padding-left: 0.35em;
`;

export const CardRow = styled(Row)`
  margin: 0;
`;
