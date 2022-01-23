import React, { useState } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { AiOutlineCheckSquare } from 'react-icons/ai';

import axios from 'axios';
import PropTypes from 'prop-types';

import { Rating } from '@mui/material';

import { FeedbackPopup } from './style';

export default function PatternReview({ patletId }) {
  const [rating, setRating] = useState(5); // initial rating value

  const handleRating = (rate) => {
    setRating(rate);
  };

  const addReview = () => {
    const data = {
      rating,
      review: document.querySelector('#review').value,
    };
    axios.post(`${process.env.REACT_APP_URL}/patterns/${patletId}/review`, data);
    setRating(5);
  };

  const sent = () => {
    document.querySelector('#checkButton').click();
  };

  const popover = (
    <Popover id="review-popover">
      <Popover.Body className="p-0 w-100">
        <FeedbackPopup className="p-3 rounded">
          <div className="d-flex flex-column">
            <h2>I have used this pattern</h2>
            <Rating
              className="mt-2"
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                handleRating(newValue);
              }}
            />
            <form>
              <div className="form-group d-flex flex-column">
                <textarea className="form-control mt-3" id="review" rows="3" style={{ resize: 'none' }} placeholder="Write your thoughts..." />
                <button className="btn btn-success align-self-end mt-3" type="button" onClick={() => { addReview(); sent(); }}>Send Review</button>
              </div>
            </form>
          </div>
        </FeedbackPopup>
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
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
