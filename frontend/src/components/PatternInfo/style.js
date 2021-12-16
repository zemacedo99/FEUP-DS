import { Col } from 'react-bootstrap';

import styled from 'styled-components';

export const MainPageSection = styled.div`
  font-family: Inter;
`;

export const PatTitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 4em;
    letter-spacing: -0.02em;
    color: #000000;
    @media only screen and (max-width: 768px) {
        font-size: 3em;
    }
`;

export const SubTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;

`;

export const PatSection = styled(Col)`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 2em;
    color: #039855;
    @media only screen and (max-width: 768px) {
        font-size: 1.2em;
    }
`;

export const PatStars = styled(Col)`
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 10px;
    flex-end;
`;

export const PatIntro = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #05603A;
`;

export const PatProblem = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #98A2B3;
`;

export const PatSolution = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
`;
