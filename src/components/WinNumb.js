import React, {useState, useEffect} from 'react';
import {Modal,Button} from 'react-bootstrap';

export default function WinNumb () {
  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>วินเลข</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
