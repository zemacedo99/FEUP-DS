import React, { useState } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

import axios from 'axios';
import PropTypes from 'prop-types';

import { Rating } from '@mui/material';

import { FeedbackPopup, Check, CustomButton } from './style';

export default function PatternReview({ patletId, deviceSize }) {
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
                <button className="btn btn-primary align-self-end mt-3" type="button" onClick={() => { addReview(); sent(); }}>Send Review</button>
              </div>
            </form>
          </div>
        </FeedbackPopup>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement={(deviceSize < 768) ? 'top' : 'bottom'} overlay={popover} rootClose>
      <CustomButton id="checkButton"><Check title="I have used this pattern" /></CustomButton>
    </OverlayTrigger>
  );
}

PatternReview.propTypes = {
  patletId: PropTypes.number.isRequired,
  deviceSize: PropTypes.number.isRequired,
};
