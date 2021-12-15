import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import axios from 'axios';

export default function Example() {
  const [message, setMessage] = useState('');

  const sendRequest = () => {
    axios.get(`${process.env.REACT_APP_URL}/hello/hello`).then((res) => {
      setMessage(res.data.message);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="main-section w-50 ml-0 mr-0 mx-auto text-center">
      <p> Hello! I want to speak with backend. </p>
      <Button variant="outline-success" onClick={sendRequest}>Click here to send request</Button>
      <p className="message">{message}</p>
    </div>
  );
}
