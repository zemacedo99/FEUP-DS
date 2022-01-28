import { Col } from 'react-bootstrap';

import styled from 'styled-components';

export const BookmarksButton = styled.div`
    //@media screen and (min-width: 1281px) {
        background: ${(props) => (props.selected ? 'linear-gradient(90deg, #7F56D9 0%, #9E77ED 100%)' : '#F9FAFB')};
        color: ${(props) => (props.selected ? 'white' : '#6C6C6C')};
        width: 100%;
        min-height: inherit;
        border-radius: 40px;
        text-align: center;
    }
    @media screen and (min-width: 481px) and (max-width: 1280px) {
        background: ${(props) => (props.selected ? 'linear-gradient(90deg, #7F56D9 0%, #9E77ED 100%)' : '#F9FAFB')};
        color: ${(props) => (props.selected ? 'white' : '#6C6C6C')};
        width: 100%;
        min-height: inherit;
        border-radius: 40px;
        text-align: center;
    }
    @media screen and (max-width: 480px) {
        background: ${(props) => (props.selected ? 'linear-gradient(90deg, #7F56D9 0%, #9E77ED 100%)' : '#F9FAFB')};
        color: ${(props) => (props.selected ? 'white' : '#6C6C6C')};
        width: 100%;
        min-height: inherit;
        border-radius: 40px;
        text-align: center;
    }
    
`;

export const ButtonWrapper = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: flex-end;

`;

export const LeftButtonBackground = styled.div`
    @media screen and (min-width: 1281px) {
        background: #F9FAFB;
        border-radius: 40px 0px 0px 40px;
        width: 100%;
        text-align: center;
    }
    @media screen and (min-width: 481px) and (max-width: 1280px) {
        background: #F9FAFB;
        border-radius: 40px 0px 0px 40px;
        width: 100%;
        text-align: center;
    }
    @media screen and (max-width: 480px) {
        background: #F9FAFB;
        border-radius: 40px 0px 0px 40px;
        width: 100%;
        text-align: center;
    }
`;

export const RightButtonBackground = styled.div`
    @media screen and (min-width: 1281px) {
        background: #F9FAFB;
        border-radius: 0px 40px 40px 0px;
        width: 100%;
        text-align: center;
    }
    @media screen and (min-width: 481px) and (max-width: 1280px) {
        background: #F9FAFB;
        border-radius: 0px 40px 40px 0px;
        width: 100%;
        text-align: center;
    }
    @media screen and (max-width: 480px) {
        background: #F9FAFB;
        border-radius: 0px 40px 40px 0px;
        width: 100%;
        text-align: center;
    }
`;
