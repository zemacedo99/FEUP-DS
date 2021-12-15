import React from 'react';

import { Favorite } from '../components/Favorite/index';

export default function AddFavorite() {
  return (
    <div>
      <Favorite patlet_id="1" />
      <Favorite patlet_id="2" />
      <Favorite patlet_id="3" />
      <Favorite patlet_id="4" />
      <Favorite patlet_id="5" />
    </div>
  );
}
