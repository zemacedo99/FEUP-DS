import { Col } from 'react-bootstrap';

import styled from 'styled-components';

export const horizontalMarginMediaQueries = `
    @media screen and (max-width: 480px) {
    --horizontal-margin: 3vw;
    }
    @media screen and (min-width: 481px) and (max-width: 1280px) {
    --horizontal-margin: 8vw;
    }
    @media screen and (min-width: 1281px) {
    --horizontal-margin: 12vw;
    }
`;

export const MainPageSection = styled.div`
    font-family: Inter;
    ${horizontalMarginMediaQueries}
    padding: 0px var(--horizontal-margin) 100px var(--horizontal-margin);
`;

export const PatTitle = styled.h1`
    font-weight: bold;
    font-size: 72px;
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

export const PatImage = styled.div`
    max-width: 50%;
    margin: auto;
    @media only screen and (max-width: 768px) {
        max-width: 75%;
    }
`;
