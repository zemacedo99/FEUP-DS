import { Col } from 'react-bootstrap';
import { AiOutlineCheck } from 'react-icons/ai';

import styled from 'styled-components';

import { Bookmark } from '../Bookmark/index';
import { Favorite } from '../Favorite/index';

export const OverrideBookmark = styled(Bookmark)`
    background: #E9D7FE;
    border-radius: 10px;
    color: #6941C6;
    font-size: 40px;
    &:hover {
        color: #6941C6;
        background: rgba(233, 215, 254, 0.6);
    }
    margin-right:0.4em;
`;

export const OverrideFavorite = styled(Favorite)`
    background: #E9D7FE;
    border-radius: 10px;
    color: #6941C6;
    font-size: 40px;
    &:hover {
        color: #6941C6;
        background: rgba(233, 215, 254, 0.6);
    }
    margin-right:0.4em;
`;

export const Check = styled(AiOutlineCheck)`
    background: #E9D7FE;
    border-radius: 10px;
    color: #6941C6;
    font-size: 40px;
    cursor: pointer;
    &:hover {
        color: #6941C6;
        background: rgba(233, 215, 254, 0.6);
    }
    margin-right:0.4em;
`;

export const Confidence = styled.span`
    vertical-align: super;
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
