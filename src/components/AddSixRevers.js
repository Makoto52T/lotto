import React, {useState, useEffect} from 'react';
import {Modal, Button, Form, InputGroup} from 'react-bootstrap';
import Badge from './Badge';

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

  function reversAll () {
    let arr = badge;
    let old = [];
    for (let i = 0; i < arr.length; i++) {
      console.log (arr[i].numb);
      if (arr[i].numb !== '' && i !== arr.length - 1) {
        old.push (arr[i]);
      }
    }
    setBadge ([
      ...old,
      {
        numb: numb,
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
      },
      {
        numb: numb[0] + '' + numb[2] + '' + numb[1],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
      },
      {
        numb: numb[1] + '' + numb[2] + '' + numb[0],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
      },
      {
        numb: numb[1] + '' + numb[0] + '' + numb[2],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
      },
      {
        numb: numb[2] + '' + numb[0] + '' + numb[1],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
      },
      {
        numb: numb[2] + '' + numb[1] + '' + numb[0],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
      },
      {
        numb: '',
        Top: '',
        Bottom: '',
        Tod: '',
        TodDisable: true,
        BottomDisable: false,
      },
    ]);

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
