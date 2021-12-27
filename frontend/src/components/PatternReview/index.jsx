import React, { useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { Rating } from 'react-simple-star-rating';

import PropTypes from 'prop-types';
import axios from 'axios';

import { FeedbackPopup } from './style';

export default function Review({ patletId }) {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  const [rating, setRating] = useState(20); // initial rating value
  // Catch Rating value
  const handleRating = (rate) => {
    // document.querySelector('#rating').value = parseInt(rate, 10) / 20;
    setRating(rate);
  };

  const addReview = () => {
    const data = {
      rating: parseInt(rating, 10) / 20,
      // rating: parseInt(document.querySelector('#rating').value, 10),
      review: document.querySelector('#review').value,
    };
    axios.post(`${process.env.REACT_APP_URL}/patterns/${patletId}/review`, data).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      <span className="btn btn-success p-0" role="button" type="submit" onClick={open} onKeyPress={() => {}} tabIndex="0">
        <AiOutlineCheckSquare className="display-1" />
      </span>
      <Modal>
        <FeedbackPopup className="m-3">
          <div className="d-flex flex-column">
            <h4 aria-hidden="true" onClick={close} className="align-self-end m-0">&times;</h4>
            <h1>I have used this pattern</h1>
            <br />
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              allowHover={false}
              initialValue={20}
            />
            <form>
              <div className="form-group d-flex flex-column">
                {/* <input type="number" name="rating" id="rating" defaultValue={1} hidden /> */}
                <br />
                <textarea className="form-control" id="review" rows="3" />
                <br />
                <button className="btn btn-success align-self-end" type="button" onClick={() => { addReview(); close(); }}>Send Review</button>
              </div>
            </form>
          </div>
        </FeedbackPopup>
      </Modal>
    </div>
  );
}

Review.propTypes = {
  patletId: PropTypes.string.isRequired,
};
