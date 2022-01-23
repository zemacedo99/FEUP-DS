import styled from 'styled-components';

export const MovingInput = styled.input`
  background-color: #e4e7ec;
  border-radius: 50px;
  padding-left: 3rem;
  &:focus {
    box-shadow: none !important;
    border-color: #a8a8a8;
    background-color: #eaedf2;
    width: 25ch;
    left: 0;
  }
`;

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
`;

export const MovingIconInputContainer = styled.div`
  position: relative;

  & input {
    width: 0;
    left: 25ch;
    transition: left 0.35s, width 0.35s;
  }

  &:hover input {
    width: 25ch;
    left: 0
  }
`;
