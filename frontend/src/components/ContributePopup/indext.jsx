import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import PropTypes from 'prop-types';

export default function ContributeModal({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <h3>Contribute</h3>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="reason">
            <Form.Label>Reason</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe why you want to contribute" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

ContributeModal.defaultProps = {
  show: false,
};

ContributeModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool,
};
