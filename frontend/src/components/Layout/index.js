import styled from 'styled-components';

export default styled.div`
  font-family: Inter;
  
  @media screen and (max-width: 480px) {
    --horizontal-margin: 3vw;
  }
  @media screen and (min-width: 481px) and (max-width: 1280px) {
    --horizontal-margin: 8vw;
  }
  @media screen and (min-width: 1281px) {
    --horizontal-margin: 12vw;
  }
  padding: 0px var(--horizontal-margin) 100px var(--horizontal-margin);
`;
