import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function Example() {
  const [message, setMessage] = useState('');

  const sendRequest = () => {
    axios.get(`${process.env.REACT_APP_URL}/users/message`).then((res) => {
      const { data } = res;
      setMessage(data);
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
