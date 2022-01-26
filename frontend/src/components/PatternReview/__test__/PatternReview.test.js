import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  render,
  cleanup,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';

import PatternReview from '..';

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup); // Cleanup so there aren't multiple renders at the same time

function MockPatternReview() {
  return (
    <Router>
      <PatternReview patletId={0} deviceSize={0} />
    </Router>
  );
}

it('Renders ContributePopup without crashing', () => {
  render(<MockPatternReview />);
});

it('Renders ContributePopup with relevant elements', async () => {
  const { container, getAllByTitle, getAllByRole } = render(
    <MockPatternReview />,
  );
  expect(getAllByTitle('I have used this pattern')).toHaveLength(1);

  const checkButton = container.querySelector('#checkButton');
  await waitFor(() => expect(checkButton));

  act(() => {
    fireEvent.click(checkButton);
  });

  await waitFor(() => {
    const radios = getAllByRole('radio');
    act(() => {
      fireEvent.click(radios[0]);
    });

    expect(radios).toHaveLength(6); // 5 stars + empty
    expect(getAllByRole('textbox')).toHaveLength(1);
    expect(getAllByRole('button')).toHaveLength(2);
  });
});
