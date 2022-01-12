import React, { useState } from 'react';
// import { useModal } from 'react-hooks-use-modal';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { AiOutlineCheckSquare } from 'react-icons/ai';

import axios from 'axios';
import PropTypes from 'prop-types';

import { Rating } from '@mui/material';

import SubTitleText from '../SubTitleText';
import { FeedbackPopup } from './style';

export default function PatternReview({ patletId }) {
  // const [Modal, open, close] = useModal('root', {
  //   preventScroll: true,
  //   closeOnOverlayClick: false,
  // });

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
    axios.post(`${process.env.REACT_APP_URL}/patterns/${patletId}/review`, data);
  };

  const sent = () => {
    document.querySelector('#checkButton').click();
  };

  const popover = (
    <Popover id="review-popover">
      <Popover.Body className="p-0 w-100">
        <FeedbackPopup className="p-4">
          <div className="d-flex flex-column">
            <SubTitleText title="I have used this pattern" />
            <br />
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                handleRating(newValue);
              }}
            />
            <form>
              <div className="form-group d-flex flex-column">
                {/* <input type="number" name="rating" id="rating" defaultValue={1} hidden /> */}
                <br />
                <textarea className="form-control" id="review" rows="3" style={{ resize: 'none' }} />
                <br />
                <button className="btn btn-success align-self-end" type="button" onClick={() => { addReview(); sent(); }}>Send Review</button>
              </div>
            </form>
          </div>
        </FeedbackPopup>
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <OverlayTrigger trigger="click" placement="top-end" overlay={popover}>
        <span id="checkButton" className="btn btn-success p-0">
          <AiOutlineCheckSquare className="display-1" title="I have used this pattern" />
        </span>
      </OverlayTrigger>
    </div>
  );
}

PatternReview.propTypes = {
  patletId: PropTypes.string.isRequired,
};
