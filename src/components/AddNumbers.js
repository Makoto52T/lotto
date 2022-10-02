import React, {useState, useEffect} from 'react';
import {InputGroup, Form, Button, Table} from 'react-bootstrap';
import numeral from 'numeral';
import * as func from './Functions';
import WinNumb from './WinNumb';

export default function AddNumbers({badge, setBadge, config, setConfig}) {
  const [top, setTop] = useState (0);
  const [down, setDown] = useState (0);
  const [tod, setTod] = useState (0);

  async function checkLength (input, index) {
    let TodDisable = true;
    let BottomDisable = false;
    if (input.length > 2) {
      TodDisable = false;
      BottomDisable = true;
    } else if (input.length === 1) {
      // เลขวิ่ง
    } else {
      // 2ตัว
    }

    // let pass = await loopForFoundNumb (input);
    let pass = true;
    if (pass || input === '') {
      setBadge (prevState =>
        prevState.map ((x, i) => {
          if (i === index) {
            if (input.length > 2) {
              if (copyTop && copyTod && i !== 0) {
                return {
                  numb: input,
                  Top: top !== 0 ? top : x.Top,
                  Bottom: x.Bottom,
                  Tod: tod !== 0 ? tod : x.Tod,
                  TodDisable: TodDisable,
                  BottomDisable: BottomDisable,
                  reverse: false,
                  set: 0,
                };
              } else if (copyTop && !copyTod && i !== 0) {
                return {
                  numb: input,
                  Top: top !== 0 ? top : x.Top,
                  Bottom: x.Bottom,
                  Tod: x.Tod,
                  TodDisable: TodDisable,
                  BottomDisable: BottomDisable,
                  reverse: false,
                  set: 0,
                };
              } else if (!copyTop && copyTod && i !== 0) {
                return {
                  numb: input,
                  Top: x.Top,
                  Bottom: x.Bottom,
                  Tod: tod !== 0 ? tod : x.Tod,
                  TodDisable: TodDisable,
                  BottomDisable: BottomDisable,
                  reverse: false,
                  set: 0,
                };
              } else if (!copyTop && !copyTod && i !== 0) {
                return {
                  numb: input,
                  Top: x.Top,
                  Bottom: x.Bottom,
                  Tod: x.Tod,
                  TodDisable: TodDisable,
                  BottomDisable: BottomDisable,
                  reverse: false,
                  set: 0,
                };
              } else if (i === 0) {
                return {
                  numb: input,
                  Top: x.Top,
                  Bottom: x.Bottom,
                  Tod: x.Tod,
                  TodDisable: TodDisable,
                  BottomDisable: BottomDisable,
                  reverse: false,
                  set: 0,
                };
              }
            } else {
              if (copyTop && copyDown && i !== 0) {
                return {
                  numb: input,
                  Top: top !== 0 ? top : x.Top,
                  Bottom: down !== 0 ? down : x.Bottom,
                  Tod: x.Tod,
                  TodDisable: TodDisable,
                  BottomDisable: BottomDisable,
                  reverse: false,
                  set: 0,
                };
              } else if (copyTop && !copyDown && i !== 0) {
                return {
                  numb: input,
                  Top: top !== 0 ? top : x.Top,
                  Bottom: x.Bottom,
                  Tod: x.Tod,
                  TodDisable: TodDisable,
                  BottomDisable: BottomDisable,
                  reverse: false,
                  set: 0,
                };
              } else if (!copyTop && copyDown && i !== 0) {
                return {
                  numb: input,
                  Top: x.Top,
                  Bottom: down !== 0 ? down : x.Bottom,
                  Tod: x.Tod,
                  TodDisable: TodDisable,
                  BottomDisable: BottomDisable,
                  reverse: false,
                  set: 0,
                };
              } else if (!copyTop && !copyDown && i !== 0) {
                return {
                  numb: input,
                  Top: x.Top,
                  Bottom: x.Bottom,
                  Tod: x.Tod,
                  TodDisable: TodDisable,
                  BottomDisable: BottomDisable,
                  reverse: false,
                  set: 0,
                };
              } else if (i === 0) {
                return {
                  numb: input,
                  Top: x.Top,
                  Bottom: x.Bottom,
                  Tod: x.Tod,
                  TodDisable: TodDisable,
                  BottomDisable: BottomDisable,
                  reverse: false,
                  set: 0,
                };
              }
            }
          } else {
            return x;
          }
        })
      );
    } else {
      alert ('มีเลขชุดนี้แล้ว');
    }
    console.log (badge);
    if (badge[index].set !== 0) {
      setBadge (func.setZero (badge, badge[index].set, index, input));
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
            reverse: x.reverse,
            set: x.set,
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
            reverse: x.reverse,
            set: x.set,
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
            reverse: x.reverse,
            set: x.set,
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
        reverse: false,
        set: 0,
      },
    ]);
  }

  useEffect (
    () => {
      async () => {
        // console.log (badge);
        // let data = await summaryPrice (badge);
        // console.log (data);
      };
    },
    [badge]
  );

  //   function removeBadge (index) {
  //     console.log (index);
  //     let arr = badge;
  //     arr.splice (index, 1);
  //     setBadge (arr);
  //   }

  function addRav (input, index) {
    if (val.numb.length === 2) {
      setBadge (func.revers2length (input, index, badge));
    } else if (val.numb.length === 3) {
      setBadge (func.revers3length (index, badge, input));
    }
  }

  function door19 (index) {
    setBadge (func.doo19 (badge, index));
  }

  function getBadge () {
    if (badge !== undefined) {
      return badge.map ((x, i) => (
        <tr key={i} className="text-center">
          <td style={{width: '5%'}}>{i + 1}</td>
          <td>
            <Form.Control
              size="sm"
              id="first"
              onChange={e => {
                checkLength (e.target.value, i);
              }}
              value={x.numb}
              maxLength="4"
              className="text-center"
            />
          </td>
          <td style={{width: '18%'}}>
            <Form.Control
              size="sm"
              onChange={e => {
                addTop (e.target.value, i);
                setTop (e.target.value);
              }}
              className="text-end"
              value={x.Top}
            />
          </td>
          <td style={{width: '18%'}}>
            {x.BottomDisable === false &&
              <Form.Control
                size="sm"
                onChange={e => {
                  addBottom (e.target.value, i);
                  setDown (e.target.value);
                }}
                className="text-end"
                value={x.Bottom}
              />}
          </td>
          <td style={{width: '18%'}}>
            {x.TodDisable === false &&
              <Form.Control
                size="sm"
                onChange={e => {
                  addTod (e.target.value, i);
                  setTod (e.target.value);
                }}
                className="text-end"
                value={x.Tod}
              />}
          </td>
          <td style={{width: '5%'}}>
            {x.set === 0 &&
              x.numb.length > 0 &&
              <Form.Check
                type="checkbox"
                checked={x.reverse}
                onChange={() => {
                  addRav (x, i);
                }}
              />}
          </td>
          <td style={{width: '5%'}}>
            {x.numb.length === 1 &&
              <Form.Check
                type="checkbox"
                onChange={() => {
                  door19 (i);
                }}
              />}
          </td>
        </tr>
      ));
    }
  }

  async function cTop () {
    setConfig ({
      row: config.row,
      top: !config.top,
      down: config.down,
      tod: config.tod,
    });
  }
  async function cDown () {
    setConfig ({
      row: config.row,
      top: config.top,
      down: !config.down,
      tod: config.tod,
    });
  }
  async function cTod () {
    setConfig ({
      row: config.row,
      top: config.top,
      down: config.down,
      tod: !config.tod,
    });
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th colSpan={2}>{'กำหนดค่าเดียวกัน'}</th>
            <th>
              <Form.Check
                type="checkbox"
                checked={config.top}
                onChange={cTop}
              />
            </th>
            <th>
              <Form.Check
                type="checkbox"
                checked={config.down}
                onChange={cDown}
              />
            </th>
            <th>
              <Form.Check
                type="checkbox"
                checked={config.tod}
                onChange={cTod}
              />
            </th>
            <th colSpan={2}>
              <Button size="sm">วินเลข</Button>
            </th>
          </tr>
        </thead>
        <thead>
          <tr className="text-center">
            <th>ลำดับ</th>
            <th>หมายเลข</th>
            <th>บน</th>
            <th>ล่าง</th>
            <th>โต๊ด</th>
            <th>กลับ</th>
            <th>19ตัว</th>
          </tr>
        </thead>
        <tbody>
          {getBadge ()}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={2}>รวมยอด</th>
            <th className="text-end">0</th>
            <th className="text-end">0</th>
            <th className="text-end">0</th>
            <th colSpan={2}>
              <Button
                className="btn-warning"
                style={{width: '100%'}}
                onClick={() => {
                  addBadge ();
                }}
              >
                เพิ่ม
              </Button>
            </th>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
