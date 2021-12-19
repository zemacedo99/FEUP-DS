import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import { collection, getDocs, addDoc } from 'firebase/firestore';

import db from '../utils/firebase';

export default function DatabaseExample() {
  const [final, setfinal] = useState('');
  let aux = [];
  const askForPatlets = () => {
    getDocs(collection(db, 'patlets')).then((obj) => {
      aux = [];
      const docSnapshots = obj.docs;
      for (let i = 0; i < docSnapshots.length; i += 1) {
        aux.push(<li>{docSnapshots[i].data().title}</li>);
      }
      setfinal(aux);
    });
  };

  const addReview = () => {
    addDoc(collection(db, 'reviews'), {
      rating: parseInt(document.querySelector('#rating').value, 10),
      review: document.querySelector('#review').value,
      // patletId: DocumentReference of Patlet
    }).then((data) => {
      console.log(data);
      setfinal(<h1>Review added, check database.</h1>);
    });
  };

  return (
    <div className="main-section w-50 ml-0 mr-0 mx-auto text-center">
      <input type="number" name="rating" id="rating" />
      <input type="text" name="review" id="review" />
      <Button onClick={addReview}>Send Review</Button>
      <p> Hello! I want to speak with backend. </p>
      <Button variant="outline-success" onClick={askForPatlets}>Click here to send request</Button>
      <ul>{final}</ul>
    </div>
  );
}
