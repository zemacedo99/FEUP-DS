import styled from 'styled-components';

import PatternCardList from '../../components/PatternCardList';

export const SubTitle = styled.h1`
  font-size: 30px;
`;

export const CustomPatternCardList = styled(PatternCardList)`
  @media screen and (min-width: 576px) {
    overflow-y: scroll;
    max-height: 25rem;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0,0,0,0.1);
  }
  
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: rgba(0,0,0,0.2);
  }
  
  ::-webkit-scrollbar-thumb:hover{
    background: rgba(0,0,0,0.4);
  }
  
  ::-webkit-scrollbar-thumb:active{
    background: rgba(0,0,0,.9);
  }
`;
