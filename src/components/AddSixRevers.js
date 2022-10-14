import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, InputGroup } from 'react-bootstrap'
import Badge from './Badge'
import { revers3length } from './Functions'

export default function AddSixRevers ({
  show,
  setSix,
  badge,
  setBadge,
  setBtn,
  setSelect,
  setOldBtn
}) {
  const [numb, setNumb] = useState()

  function handleClose () {
    setSix(false)
  }

  useEffect(() => {
    focusInput()
  }, [])

  function focusInput () {
    document.getElementById('numbX').focus()
  }

  async function reversAll () {
    let data = [
      {
        numb: numb,
        Top: '',
        Bottom: '',
        Tod: '',
        TodDisable: false,
        BottomDisable: true,
        reverse: false,
        set: 0
      }
    ]
    if (badge) {
      console.log('===============old===========')
      console.log(revers3length(badge.length, badge, { numb }))
      setBadge(revers3length(badge.length, badge, { numb }))
    } else {
      console.log('else revers3length')
      setBadge(await revers3length(0, data, { numb }))
    }
    setBtn(prevState =>
      prevState.map((x, i) => {
        if (x.name === '3ตัว') {
          setSelect(x.name)
          setOldBtn('6กลับ')
          return { name: x.name, variant: 'danger' }
        }
        return { name: x.name, variant: 'secondary' }
      })
    )
    setSix(false)
  }

  function ckeckKey (key) {
    if (key === 'Enter') {
      console.log('get reverse all')
      reversAll()
    }
  }

  return (
    <div>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>6 กลับ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <Form.Control
              placeholder='หมายเลข'
              id='numbX'
              onChange={e => {
                setNumb(e.target.value)
              }}
              onKeyPress={e => ckeckKey(e.key)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            ยกเลิก
          </Button>
          <Button variant='primary' onClick={reversAll}>
            บันทึก
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
