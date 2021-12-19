import React, { useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { AiFillCheckSquare } from 'react-icons/ai';
import { Rating } from 'react-simple-star-rating';

import { FeedbackPopup } from './style';

export default function Review() {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  const [rating, setRating] = useState(0); // initial rating value
  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
  };

  return (
    <div>
      <span role="button" type="submit" onClick={open} onKeyPress={() => {}} tabIndex="0">
        <AiFillCheckSquare />
      </span>
      {/* <button type="submit" onClick={open}><AiFillCheckSquare /></button> */}
      <Modal>
        <FeedbackPopup>
          <div>
            <h1>I have used this pattern</h1>
            <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
            <button type="submit" onClick={close}>Submit</button>
          </div>
        </FeedbackPopup>
      </Modal>
    </div>
  );
}
