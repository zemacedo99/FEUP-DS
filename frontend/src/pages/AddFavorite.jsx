import React from 'react';

import PropTypes from 'prop-types';

import { Favorite } from '../components/Favorite/index';

export default function AddFavorite({ setFavoriteIds }) {
  return (
    <div>
      <Favorite
        patlet_id={1}
        setFavoriteIds={setFavoriteIds}
      />
      <Favorite
        patlet_id={2}
        setFavoriteIds={setFavoriteIds}
      />
      <Favorite
        patlet_id={3}
        setFavoriteIds={setFavoriteIds}
      />
      <Favorite
        patlet_id={4}
        setFavoriteIds={setFavoriteIds}
      />
      <Favorite
        patlet_id={5}
        setFavoriteIds={setFavoriteIds}
      />
    </div>
  );
}

AddFavorite.propTypes = {
  setFavoriteIds: PropTypes.func.isRequired,
};
