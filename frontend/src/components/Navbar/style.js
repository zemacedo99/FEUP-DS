import { Navbar, Nav, Container } from 'react-bootstrap';

import styled from 'styled-components';

export const NavbarDesktop = styled(Navbar)`
  @media screen and (max-width: 1280px){
    display: none;
  }
  background-color: white;
  font-family: Inter;
  font-size: 20px;
`;

export const NavbarMobile = styled(Navbar)`
  @media screen and (max-width: 480px){
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    -webkit-box-shadow: 0px 0px 42px -23px rgba(0,0,0,0.35);
    -moz-box-shadow: 0px 0px 42px -23px rgba(0,0,0,0.35);
    box-shadow: 0px 0px 42px -23px rgba(0,0,0,0.35);
  }
  @media screen and (min-width: 481px) and (max-width: 1699px){
    display: none;
  }
  @media screen and (min-width: 1700px){
    display: none;
  }
  background-color: white;
`;

export const NavbarTablet = styled(Navbar)`
  @media screen and (max-width: 480px){
    display: none;
  }
  @media screen and (min-width: 481px) and (max-width: 1280px){
    display: flex;
  }
  @media screen and (min-width: 1281px) and (max-width: 1699px){
    display: none;
  }
  @media screen and (min-width: 1700px){
    display: none;
  }
`;

export const NavbarLogo = styled(Navbar.Brand)`
  padding-left: 7%
`;

export const NavbarButtons = styled(Nav)`
  @media screen and (max-width: 480px){
    justify-content: center;
    text-align: center;
    color: black!important;
  }
  justify-content: flex-end;
`;

export const NavbarNav = styled(Nav)`
  display: flex;
  width: 100%;
  margin: 0!important;
  justify-content: space-between;
`;

export const NavbarContainer = styled(Container)`
  margin: 0;
  max-width: 100%;
  @media screen and (max-width: 480px){
    max-width: 100%;
  }
  @media screen and (min-width: 481px) and (max-width: 1280px){
    max-width: 100%;
  }
  @media screen and (min-width: 1700px){
    max-width: 100%;
  }
`;

export const NavbarLink = styled(Nav.Link)`
  @media screen and (min-width: 1700px){
    color: black!important;
    padding-right: 3rem!important;
  }
  @media screen and (min-width: 1281px) and (max-width: 1699px){
    color: black!important;
    padding-right: 3rem!important;
  }
  @media screen and (min-width: 481px) and (max-width: 1280px){
    color: black!important;
    padding-right: 3rem!important;
  }
`;
