import React, { useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { AiFillCheckSquare } from 'react-icons/ai';
import { Rating } from 'react-simple-star-rating';

import { collection, addDoc } from 'firebase/firestore';

import db from '../../utils/firebase';
import { FeedbackPopup } from './style';

export default function Review() {
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
      // patletId: DocumentReference of Patlet
    }).then(() => {
      <h1>Review added, check database.</h1>;
    });
  };

  return (
    <div>
      <span role="button" type="submit" onClick={open} onKeyPress={() => {}} tabIndex="0">
        <AiFillCheckSquare />
      </span>
      <Modal>
        <FeedbackPopup>
          <div>
            <h1>I have used this pattern</h1>
            <br />
            <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
            <input type="number" name="rating" id="rating" hidden />
            <br />
            <input type="text" name="review" id="review" />
            <br />
            <button type="submit" onClick={addReview}>Send Review</button>
            <button type="submit" onClick={close}>Close</button>
          </div>
        </FeedbackPopup>
      </Modal>
    </div>
  );
}
