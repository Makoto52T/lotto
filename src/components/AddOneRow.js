import React, {useState, useEffect} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap';
import {BsCartPlus} from 'react-icons/bs';
import * as func from './Functions';

export default function AddOneRow({badge, setBadge, selectBtn}) {
  const [Numb, setNumb] = useState ('');
  const [len, setLen] = useState (2);

  useEffect (
    () => {
      if (selectBtn === '2ตัว') {
        setLen (2);
      } else if (selectBtn === '3ตัว') {
        setLen (3);
      } else if (selectBtn === '19 ประตู' || selectBtn === 'เลขวิ่ง') {
        setLen (1);
      }

    },
    [selectBtn]
  );

  async function checkLen (numb) {
    console.log(selectBtn,numb.length);
    if (
      (selectBtn === '2ตัว' && numb.length === 2) ||
      (selectBtn === '3ตัว' && numb.length === 3) ||
      (selectBtn === '19 ประตู' && numb.length === 1) ||
      (selectBtn === 'เลขวิ่ง' && numb.length === 1)
    ) {
      let data = await addBadge (numb);
      await checkBtn (data);
    }
  }

  async function ckeckKey (key) {
    if (key === 'Enter') {
      let data = await addBadge (Numb);
      await checkBtn (data);
    }
  }

  function checkBtn (data) {
    console.log('this checkBtn');
    if (selectBtn === '2ตัว') {
      // setLen (2);
    } else if (selectBtn === '3ตัว') {
      // setLen (3);
    } else if (selectBtn === '19 ประตู') {
      let index = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].numb.length === 1) {
          index = i;
          break;
        }
      }
      data = func.doo19 (data, index);
    } else if (selectBtn === 'เลขวิ่ง') {
    }
    if (data && data[0].numb !== '' && data.length > 1) {
      setBadge (func.CheckNumb (data));
    }
    setNumb ('');
  }

  function addBadge (numb) {
    let TodDisable = true;
    let BottomDisable = false;
    if (selectBtn === '3ตัว') {
      TodDisable = false;
      BottomDisable = true;
    }
    if (badge === undefined) {
      let data = [
        {
          numb: numb,
          Top: '',
          Bottom: '',
          Tod: '',
          TodDisable: TodDisable,
          BottomDisable: BottomDisable,
          reverse: false,
          set: 0,
        },
      ];
      setBadge (data);
      return data;
    } else {
      let data = [
        ...badge,
        {
          numb: numb,
          Top: '',
          Bottom: '',
          Tod: '',
          TodDisable: TodDisable,
          BottomDisable: BottomDisable,
          reverse: false,
          set: 0,
        },
      ];
      return data;
    }
  }
  function addTop (input) {
    setBadge (prevState =>
      prevState.map ((x, i) => {
        return {
          numb: x.numb,
          Top: input,
          Bottom: x.Bottom,
          Tod: x.Tod,
          TodDisable: x.TodDisable,
          BottomDisable: x.BottomDisable,
          reverse: x.reverse,
          set: x.set,
        };
      })
    );
  }

  function addBottom (input) {
    setBadge (prevState =>
      prevState.map ((x, i) => {
        return {
          numb: x.numb,
          Top: x.Top,
          Bottom: input,
          Tod: x.Tod,
          TodDisable: x.TodDisable,
          BottomDisable: x.BottomDisable,
          reverse: x.reverse,
          set: x.set,
        };
      })
    );
  }

  function addTod (input) {
    setBadge (prevState =>
      prevState.map ((x, i) => {
        return {
          numb: x.numb,
          Top: x.Top,
          Bottom: x.Bottom,
          Tod: input,
          TodDisable: x.TodDisable,
          BottomDisable: x.BottomDisable,
          reverse: x.reverse,
          set: x.set,
        };
      })
    );
  }

  function reversAllBadge () {}

  return (
    <InputGroup>
      <Form.Control
        placeholder={selectBtn}
        value={Numb}
        maxLength={len}
        onChange={e => {
          checkLen (e.target.value);
          setNumb(e.target.value)
        }}
        onKeyPress={e => ckeckKey (e.key)}
      />
      <Button onClick={reversAllBadge} className="btn-warning">กลับเลข</Button>
      <Form.Control
        placeholder="บน"
        onChange={e => {
          addTop (e.target.value);
        }}
      />
      {selectBtn !== '3ตัว'
        ? <Form.Control
            placeholder="ล่าง"
            onChange={e => {
              addBottom (e.target.value);
            }}
          />
        : <Form.Control
            placeholder="โต๊ด"
            onChange={e => {
              addTod (e.target.value);
            }}
          />}
      <Button onClick={reversAllBadge} variant="danger">
        <BsCartPlus style={{margin: '5px'}} /> เพิ่ม
      </Button>
    </InputGroup>
  );
}
