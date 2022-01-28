import styled from 'styled-components';

export const Container = styled.div`
  .contribute-button {
    @media screen and (max-width: 1200px) { 
      width: 100%;
    }
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
  text-align: justify;
  text-justify: inter-word;

  a {
    color: #7F56D9;
    text-decoration: none;
  }

  a:hover {
    color: #7F56D9;  
  }
`;
