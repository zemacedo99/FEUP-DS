import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <li>
        <Link to="/">Dogs</Link>
      </li>
      <li>
        <Link to="/cats">Cats</Link>
      </li>
      <li>
        <Link to="/sheep">Sheeps</Link>
      </li>
      <li>
        <Link to="/goat">Goats</Link>
      </li>
    </div>
  );
}
export default Navbar;