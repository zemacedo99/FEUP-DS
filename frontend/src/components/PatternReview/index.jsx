import React, { useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { Rating } from 'react-simple-star-rating';

import { collection, addDoc } from 'firebase/firestore';

import PropTypes from 'prop-types';

import db from '../../utils/firebase';
import { FeedbackPopup } from './style';

export default function Review({ patletRef }) {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  const rating = useState(0); // initial rating value
  // Catch Rating value
  const handleRating = (rate: number) => {
    document.querySelector('#rating').value = parseInt(rate, 10) / 20;
    // other logic
  };

  const addReview = () => {
    addDoc(collection(db, 'reviews'), {
      rating: parseInt(document.querySelector('#rating').value, 10),
      review: document.querySelector('#review').value,
      patletId: JSON.parse(patletRef),
    }).then(() => {
      <h1>Review added, check database.</h1>;
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
            <Rating onClick={handleRating} ratingValue={rating} />
            <form>
              <div className="form-group d-flex flex-column">
                <input type="number" name="rating" id="rating" hidden />
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
  patletRef: PropTypes.string.isRequired,
};
