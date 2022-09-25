import React, {useState, useEffect} from 'react';
import {InputGroup, Form, Button} from 'react-bootstrap';
import numeral from 'numeral';

export default function AddNumbers({badge, setBadge}) {
  function checkLength (input, index) {
    console.log (input, index);
    let TodDisable = true;
    let BottomDisable = false;
    if (input.length > 2) {
      BottomDisable = true;
      TodDisable = false;
    }
    setBadge (prevState =>
      prevState.map ((x, i) => {
        if (i === index)
          return {
            numb: input,
            Top: x.Top,
            Bottom: x.Bottom,
            Tod: x.Tod,
            TodDisable: TodDisable,
            BottomDisable: BottomDisable,
          };
        return x;
      })
    );
  }

  function addTop (input, index) {
    setBadge (prevState =>
      prevState.map ((x, i) => {
        if (i === index)
          return {
            numb: x.name,
            Top: input,
            Bottom: x.Bottom,
            Tod: x.Tod,
            TodDisable: x.TodDisable,
            BottomDisable: x.BottomDisable,
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
            numb: x.name,
            Top: x.Top,
            Bottom: input,
            Tod: x.Tod,
            TodDisable: x.TodDisable,
            BottomDisable: x.BottomDisable,
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
            numb: x.name,
            Top: x.Top,
            Bottom: x.Bottom,
            Tod: input,
            TodDisable: x.TodDisable,
            BottomDisable: x.BottomDisable,
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
      },
    ]);
  }

  useEffect (
    () => {
      if (badge[0].numb !== '') {
        document.getElementById ('last').focus ();
      } else {
        document.getElementById ('first').focus ();
      }
    },
    [badge]
  );

  //   function removeBadge (index) {
  //     console.log (index);
  //     let arr = badge;
  //     arr.splice (index, 1);
  //     setBadge (arr);
  //   }

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
        {i !== badge.length - 1 &&
          i !== 0 &&
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
        {i === badge.length - 1 &&
          <input
            id="last"
            className="numbTxt"
            type="number"
            placeholder="หมายเลข"
            min="0"
            value={x.numb}
            onChange={e => {
              checkLength (e.target.value, i);
            }}
          />}
        <Button variant="warning">กลับเลข</Button>
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
