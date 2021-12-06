import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const MainPageSection = styled.div`
  font-family: Inter;
`;

export const PatTitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 90px;
    letter-spacing: -0.02em;
    color: #000000;
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
    font-size: 30px;
    line-height: 38px;
    color: #039855;
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
    color: #98A2B3;
`;
