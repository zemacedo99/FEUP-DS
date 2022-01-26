import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  render, cleanup, waitFor, fireEvent, act,
} from '@testing-library/react';

import { Favorite } from '..';

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup); // Cleanup so there aren't multiple renders at the same time

it('Renders Favorite without crashing', () => {
  render(
    <Router>
      <Favorite patlet_id={0} setFavoriteIds={() => {}} />
    </Router>,
  );
});

test('Renders Favorite click and unclick', async () => {
  let favoriteIds = [];
  const setFavoriteIds = (ids) => {
    favoriteIds = ids;
  };

  const { getByRole } = render(
    <Router>
      <Favorite patlet_id={0} setFavoriteIds={setFavoriteIds} />
    </Router>,
  );
  const button = getByRole('button');

  act(() => {
    fireEvent.click(button);
  });
  await waitFor(() => expect(Object.keys(favoriteIds).length > 0).toBeTruthy());

  act(() => {
    fireEvent.click(button);
  });
  await waitFor(() => expect(Object.keys(favoriteIds).length === 0).toBeTruthy());
});
