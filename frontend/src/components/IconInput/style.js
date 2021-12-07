import styled from 'styled-components';

export const Input = styled.input`
  background-color: #e4e7ec;
  border-radius: 50px;
  padding-left: 3rem;
  &:focus {
    box-shadow: none !important;
    border-color: #a8a8a8;
    background-color: #eaedf2;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  font-size: 1.5rem;
  left: 1rem;
  padding: 0;
`;

export const IconInputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;
