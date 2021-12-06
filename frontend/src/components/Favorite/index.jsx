import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types';

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.patlet_id = props.patlet_id;

    let favorites = JSON.parse(localStorage.getItem('favorites'));

    if (favorites === undefined || favorites === null) {
      favorites = {};
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    this.state = { favorites };
  }

  updateFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));

    if (favorites[this.patlet_id] === undefined) {
      favorites[this.patlet_id] = true;
    } else {
      delete favorites[this.patlet_id];
    }

    this.setState({ favorites });
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  render() {
    const { favorites } = this.state;

    return (
      <span role="button" onClick={() => { this.updateFavorite(); }} onKeyPress={() => {}} tabIndex="0">
        { favorites[this.patlet_id] === true
          ? <AiFillStar />
          : <AiOutlineStar /> }
      </span>
    );
  }
}

Favorite.propTypes = {
  patlet_id: PropTypes.number.isRequired,
};

export { Favorite };
