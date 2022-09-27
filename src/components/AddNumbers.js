import React, {useState, useEffect} from 'react';
import {InputGroup, Form, Button} from 'react-bootstrap';
import numeral from 'numeral';
import {revers3length} from './Functions';

export default function AddNumbers({badge, setBadge}) {
  async function checkLength (input, index) {
    console.log (input);
    let func = 'reverse2numb';
    let TodDisable = true;
    let tod = 0;
    let bottom = 0;
    let BottomDisable = false;
    if (input.length > 2) {
      TodDisable = false;
      BottomDisable = true;
      tod = '';
      bottom = 0;
      func = 'sortSix';
    } else if (input.length === 1) {
      // เลขวิ่ง
      func = 'none';
    }

    let pass = await loopForFoundNumb (input);
    console.log (pass);
    if (pass || input === '') {
      setBadge (prevState =>
        prevState.map ((x, i) => {
          if (i === index) {
            return {
              numb: input,
              Top: x.Top,
              Bottom: bottom,
              Tod: tod,
              TodDisable: TodDisable,
              BottomDisable: BottomDisable,
              func: func,
            };
          } else {
            return x;
          }
        })
      );
    } else {
      alert ('มีเลขชุดนี้แล้ว');
    }
  }

  function loopForFoundNumb (input) {
    for (let i = 0; i < badge.length; i++) {
      if (badge[i].numb === input) {
        return false;
      } else {
        if (i === badge.length - 1) {
          return true;
        }
      }
    }
  }

  function addTop (input, index) {
    setBadge (prevState =>
      prevState.map ((x, i) => {
        if (i === index)
          return {
            numb: x.numb,
            Top: input,
            Bottom: x.Bottom,
            Tod: x.Tod,
            TodDisable: x.TodDisable,
            BottomDisable: x.BottomDisable,
            func: x.func,
          };
        return x;
      })
    );
  }

  function addBottom (input, index) {
    setBadge (prevState =>
      prevState.map ((x, i) => {
        if (i === index)
          return {
            numb: x.numb,
            Top: x.Top,
            Bottom: input,
            Tod: x.Tod,
            TodDisable: x.TodDisable,
            BottomDisable: x.BottomDisable,
            func: x.func,
          };
        return x;
      })
    );
  }

  function addTod (input, index) {
    setBadge (prevState =>
      prevState.map ((x, i) => {
        if (i === index)
          return {
            numb: x.numb,
            Top: x.Top,
            Bottom: x.Bottom,
            Tod: input,
            TodDisable: x.TodDisable,
            BottomDisable: x.BottomDisable,
            func: x.func,
          };
        return x;
      })
    );
  }

  function addBadge () {
    setBadge ([
      ...badge,
      {
        numb: '',
        Top: '',
        Bottom: '',
        Tod: '',
        TodDisable: true,
        BottomDisable: false,
        func: 'reverse2numb',
      },
    ]);
  }

  useEffect (
    () => {
      if (badge[0].numb === '') {
        document.getElementById ('first').focus ();
      }
    },
    [badge]
  );

  function revers2numb (input, index) {
    console.log (input);
    let arr = [];
    for (let i = 0; i < badge.length; i++) {
      if (i < badge[index]) {
        arr.push (badge[i]);
      } else if (i === index) {
        arr.push ({
          numb: input.numb[1] + '' + input.numb[0],
          Top: input.Top,
          Bottom: input.Bottom,
          Tod: input.Tod,
          TodDisable: input.TodDisable,
          BottomDisable: input.BottomDisable,
        });
      }
    }
    setBadge ([...badge, arr]);
  }

  async function revers6numb (x, i) {
    let result = await revers3length (i, badge, x.numb, x.Top, x.Tod);
    setBadge (result);
  }

  //   function removeBadge (index) {
  //     console.log (index);
  //     let arr = badge;
  //     arr.splice (index, 1);
  //     setBadge (arr);
  //   }
  function checkedRadio () {
    setCopy (!copy);
  }

  function getBadge () {
    return badge.map ((x, i) => (
      <InputGroup key={i} className="mb-3">
        {i === 0 &&
          <input
            id="first"
            className="numbTxt"
            type="number"
            placeholder="หมายเลข"
            min="0"
            value={x.numb}
            onChange={e => {
              checkLength (e.target.value, i);
            }}
          />}
        {i !== 0 &&
          <input
            className="numbTxt"
            type="number"
            placeholder="หมายเลข"
            min="0"
            value={x.numb}
            onChange={e => {
              checkLength (e.target.value, i);
            }}
          />}
        {x.func === 'none' &&
          <Button variant="secondary" disable={true} style={{width: '80px'}}>
            กลับเลข
          </Button>}
        {x.func === 'reverse2numb' &&
          <Button
            variant="warning"
            onClick={() => {
              revers2numb (x, i);
            }}
            style={{width: '80px'}}
          >
            กลับเลข
          </Button>}
        {x.func === 'sortSix' &&
          <Button
            variant="warning"
            onClick={() => {
              revers6numb (x, i);
            }}
            style={{width: '80px'}}
          >
            6กลับ
          </Button>}
        <Form.Control
          placeholder="บน"
          onChange={e => {
            addTop (e.target.value, i);
          }}
          value={x.Top}
        />
        <Form.Control
          placeholder="ล่าง"
          onChange={e => {
            addBottom (e.target.value, i);
          }}
          value={x.Bottom}
          readOnly={x.BottomDisable}
        />
        <Form.Control
          placeholder="โต๊ด"
          onChange={e => {
            addTod (e.target.value, i);
          }}
          value={x.Tod}
          readOnly={x.TodDisable}
        />
        {i === badge.length - 1 &&
          <Button
            variant="warning"
            onClick={() => {
              addBadge ();
            }}
          >
            +
          </Button>}
        {/* <Button
          variant="danger"
          onClick={() => {
            removeBadge (i);
          }}
        >
          -
        </Button> */}
      </InputGroup>
    ));
  }
  return (
    <div>

      {getBadge ()}
    </div>
  );
}
