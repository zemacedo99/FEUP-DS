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

export const Confidence = styled.span`
    vertical-align: super;
`;

export const PatTitle = styled.h1`
    font-weight: bold;
    font-size: 4em;
    @media only screen and (max-width: 768px) {
        font-size: 3em;
    }
`;

export const PatSection = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 1.5em;
    margin-bottom: 0;
    color: #039855;
    @media only screen and (max-width: 768px) {
        font-size: 1.2em;
    }
`;

export const RelatedSection = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    color: #039855;
`;

export const PatStars = styled(Col)`
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 10px;
    flex-end;
`;

export const PatParagraph = styled.p`
    font-family: Inter;
    font-size: 1.2em;
    line-height: 24px;
    text-align: justify;
    text-justify: inter-word;
    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

export const PatImage = styled.img`
    width: auto;
    max-height: 50vh;
    padding: 1em;
`;

export const Link = styled.a`
    color: black;
    &:hover {
        color: #7F56D9;
    }
`;
