import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { render, cleanup } from '@testing-library/react';

import NavbarCustomDesktop from '../NavbarCustomDesktop';

import '@testing-library/jest-dom/extend-expect';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

afterEach(cleanup); // Cleanup so there aren't multiple renders at the same time

it('Renders NavbarDesktop without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><NavbarCustomDesktop /></Router>, div);
});

// Not a great test, would rather verify if the NavbarLink is there
it('Renders About Button correctly', () => {
  const { getByTestId } = render(<Router><NavbarCustomDesktop /></Router>);
  expect(getByTestId('navbar_desktop')).toHaveTextContent('About');
});

it('Renders Patterns Button correctly', () => {
  const { getByTestId } = render(<Router><NavbarCustomDesktop /></Router>);
  expect(getByTestId('navbar_desktop')).toHaveTextContent('Patterns');
});

it('Renders Bookmarks correctly', () => {
  const { getByTestId } = render(<Router><NavbarCustomDesktop /></Router>);
  expect(getByTestId('navbar_desktop')).toHaveTextContent('Bookmarks');
});

/* it('Renders Favourites correctly', () => {
  const { getByTestId } = render(<Router><NavbarCustomDesktop /></Router>);
  expect(getByTestId('navbar_desktop')).toHaveTextContent('Favourites');
}); */

configure({ adapter: new Adapter() });

it('Test About event', () => {
  const mockCallBack = jest.fn();

  const navbar = shallow((<Router><NavbarCustomDesktop /></Router>));
  navbar.find('about_button').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
