import React, { useState } from 'react';
import { Popup } from '@progress/kendo-react-popup';
import { Rating } from 'react-simple-star-rating';
import { Button } from 'react-floating-action-button';

import { collection, addDoc } from 'firebase/firestore';

import db from '../../utils/firebase';
// import { FeedbackPopup } from './style';

export default class Review extends React.Component {
  anchor = React.createRef();

  // const [Modal, open, close] = useModal('root', {
  //   preventScroll: true,
  //   closeOnOverlayClick: false,
  // });

  rating = useState(0); // initial rating value
  // Catch Rating value

  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  
  handleRating(rate) {
    document.querySelector('#rating').value = parseInt(rate, 10) / 20;
    // other logic
  }
  
  onClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  addReview(patletId) {
    addDoc(collection(db, 'reviews'), {
      rating: parseInt(document.querySelector('#rating').value, 10),
      review: document.querySelector('#review').value,
      patletID: patletId,
    }).then(() => {
      <h1>Review added, check database.</h1>;
    });
  }

  render() {
    return (
      <div>
        <Button tooltip="Review Pattern!" icon="fas fa-plus" onKeyPress={() => {}} tabIndex="0" ref={this.anchor} />
        <Popup
          anchor={anchor.current}
          collision={{
            horizontal: 'fit',
            vertical: 'flip',
          }}
          show={show}
          popupClass={'popup-content'}
        >
          <div>
            <h1>I have used this pattern</h1>
            <br />
            <Rating onClick={handleRating} ratingValue={rating}/* Available Props */ />
            <input type="number" name="rating" id="rating" hidden />
            <br />
            <input type="text" name="review" id="review" />
            <br />
            <button type="submit" onClick={addReview}>Send Review</button>
          </div>
        </Popup>
      </div>
    );
  }
}

/*
        <Modal>
          <FeedbackPopup>
            <div>
              <h1>I have used this pattern</h1>
              <br />
              <Rating onClick={handleRating} ratingValue={rating}/* Available Props *//* />
              <input type="number" name="rating" id="rating" hidden />
              <br />
              <input type="text" name="review" id="review" />
              <br />
              <button type="submit" onClick={addReview}>Send Review</button>
              <button type="submit" onClick={close}>Close</button>
            </div>
          </FeedbackPopup>
        </Modal>
*/
