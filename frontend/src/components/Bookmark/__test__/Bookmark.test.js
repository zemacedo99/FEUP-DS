import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  render, cleanup, waitFor, fireEvent,
} from '@testing-library/react';

import { Bookmark } from '..';

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup); // Cleanup so there aren't multiple renders at the same time

it('Renders Bookmark without crashing', () => {
  render(
    <Router>
      <Bookmark patlet_id={0} setBookmarkIds={() => {}} />
    </Router>,
  );
});

test('Renders Bookmark click and unclick', async () => {
  let bookmarkIds = [];
  const setBookmarkIds = (ids) => {
    bookmarkIds = ids;
  };

  const { getByRole } = render(
    <Router>
      <Bookmark patlet_id={0} setBookmarkIds={setBookmarkIds} />
    </Router>,
  );
  const button = getByRole('button');

  fireEvent.click(button);
  await waitFor(() => expect(Object.keys(bookmarkIds).length > 0).toBeTruthy());

  fireEvent.click(button);
  await waitFor(() => expect(Object.keys(bookmarkIds).length === 0).toBeTruthy());
});
