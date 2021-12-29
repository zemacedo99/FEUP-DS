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
        <h1 className="m-0">Contribute</h1>
      </Modal.Header>
      <Modal.Body>
        <Form className="mt-3">
          <Form.Group className="mb-1" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="reason">
            <Form.Label>Reason</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe why you want to contribute" />
          </Form.Group>
          <div className="mt-3 row g-0">
            <Button className="col-12 col-md-auto" variant="primary" type="submit">
              Submit
            </Button>
          </div>
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
