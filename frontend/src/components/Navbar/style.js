import { Navbar, Nav, Container } from 'react-bootstrap';

import styled from 'styled-components';

export const NavbarDesktop = styled(Navbar)`
  @media screen and (max-width: 1280px) {
    display: none;
  }
  background-color: white;
  font-family: Inter;
  font-size: 20px;
`;

export const NavbarMobile = styled(Navbar)`
  @media screen and (max-width: 480px) {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0px 0px 42px -23px rgba(0, 0, 0, 0.35);
  }
  @media screen and (min-width: 481px) {
    display: none;
  }
  background-color: white;
  font-family: Inter;
  font-size: 20px;
`;

export const NavbarTablet = styled(Navbar)`
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 481px) and (max-width: 1280px) {
    display: flex;
  }
  @media screen and (min-width: 1281px) {
    display: none;
  }
  font-family: Inter;
  font-size: 20px;
`;

export const NavbarButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 1rem;
  height: 100%;
`;

export const ColContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavbarNav = styled(Nav)`
  display: flex;
  width: 100%;
  margin: 0 !important;
  justify-content: space-between;
`;

export const NavbarContainer = styled(Container)`
  margin: 0;
  max-width: 100%;
  padding: 0 50px 0 50px; // Using the padding defined in the home page, TODO change to a dynamic amount
`;

export const NavbarLink = styled(Nav.Link)`
  text-align: center;
  @media screen and (min-width: 481px) {
    color: black !important;
    font-size: 1rem;
    text-align: right;
    padding: 0 0 0 3rem !important;
  }
  transition: 0.2s opacity;
  &:hover {
    opacity: 0.7;
  }
`;
