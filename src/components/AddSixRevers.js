import React, {useState, useEffect} from 'react';
import {Modal, Button, Form, InputGroup} from 'react-bootstrap';
import Badge from './Badge';
import {revers3length} from './Functions';

export default function AddSixRevers({show, setSix, badge, setBadge}) {
  const [numb, setNumb] = useState ();
  const [top, setTop] = useState (0);
  const [tod, setTod] = useState (0);

  function handleClose () {
    setSix (false);
  }

  useEffect (() => {
    focusInput ();
  }, []);

  function focusInput () {
    document.getElementById ('numbX').focus ();
  }

  async function reversAll () {
    let result = await revers3length (null, badge, numb, top, tod);
    console.log (result);
    setBadge (result);
    setSix (false);
  }

  function ckeckKey (key) {
    if (key === 'Enter') {
      reversAll ();
    }
  }

  return (
    <div>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>6 กลับ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="หมายเลข"
              id="numbX"
              onChange={e => {
                setNumb (e.target.value);
              }}
              onKeyPress={e => ckeckKey (e.key)}
            />
            <Form.Control
              placeholder="บน"
              onChange={e => {
                setTop (e.target.value);
              }}
              onKeyPress={e => ckeckKey (e.key)}
            />
            <Form.Control
              placeholder="โต๊ด"
              onChange={e => {
                setTod (e.target.value);
              }}
              onKeyPress={e => ckeckKey (e.key)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ยกเลิก
          </Button>
          <Button variant="primary" onClick={reversAll}>
            บันทึก
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
