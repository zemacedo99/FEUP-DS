import styled from 'styled-components';

export const MainPageSection = styled.div`
  font-family: Inter;
  margin: 1em 10em;
  @media screen and (max-width: 480px) {
    margin: 1em 1em;
  }
  @media screen and (min-width: 481px) and (max-width: 1280px) {
    margin: 1em 5em;
  }
  @media screen and (min-width: 1281px) {
    margin: 1em 10em;
  }
`;
