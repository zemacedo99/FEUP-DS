import { Col } from 'react-bootstrap';

import styled from 'styled-components';

export const ReadlaterButton = styled.span`
    @media screen and (min-width: 1281px) {
        color: ${(props) => (props.selected ? '#6941C6' : '#6C6C6C')};
        border-bottom: ${(props) => (props.selected ? '1px solid #6941C6' : 'none')};
        margin-bottom: 3px;
    }
    @media screen and (min-width: 481px) and (max-width: 1280px) {
        background: linear-gradient(90deg, #7F56D9 0%, #9E77ED 100%);
        border-radius: 40px;
        color: white;
        padding: .3rem .6rem;
        width: 100%;
        text-align: center;
    }
    @media screen and (max-width: 480px) {
        color: blue;
    }
    
`;

export const ButtonWrapper = styled(Col)`
    @media screen and (min-width: 481px) and (max-width: 1280px) {
        background: #F9FAFB;
        border-radius: 40px;
    }
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`;

// @media screen and (max-width: 480px) {
//     display: none;
// }
// @media screen and (min-width: 481px) and (max-width: 1280px) {
//     display: flex;
// }
// @media screen and (min-width: 1281px) {
//     display: none;
// }
