import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render, cleanup } from '@testing-library/react';

import ContributeModal from '..';

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup); // Cleanup so there aren't multiple renders at the same time

function MockContributeModal() {
  return (
    <Router>
      <ContributeModal show onHide={() => {}} setShow={() => {}} />
    </Router>
  );
}

it('Renders ContributePopup without crashing', () => {
  render(<MockContributeModal />);
});

it('Renders NavbarDesktop with relevant elements', () => {
  const { getAllByLabelText, getAllByRole } = render(<MockContributeModal />);
  expect(getAllByLabelText('Name')).toHaveLength(1);
  expect(getAllByLabelText('Email')).toHaveLength(1);
  expect(getAllByLabelText('Reason')).toHaveLength(1);
  expect(getAllByRole('button')).toHaveLength(2); // collapse and submit
});
