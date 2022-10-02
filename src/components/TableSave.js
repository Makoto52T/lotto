import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import numeral from 'numeral';

export default function TableSave({badge}) {
  const [data, setData] = useState ([]);

  useEffect (
    () => {
      if (badge) {
        convert ();
      }
    },
    [badge]
  );

  function convert () {
    // console.log ('init');
    let arr = [];
    for (let i = 0; i < badge.length; i++) {
    //   console.log (badge[i]);
      if (badge[i].Top > 0) {
        arr.push ({
          numb: badge[i].numb,
          date: '29-09-2022',
          typing: typingName (badge[i].numb, 'top'),
          price: badge[i].Top,
        });
      }
      if (badge[i].Bottom > 0) {
        arr.push ({
          numb: badge[i].numb,
          date: '29-09-2022',
          typing: typingName (badge[i].numb, 'down'),
          price: badge[i].Bottom,
        });
      }
      if (badge[i].Tod > 0) {
        console.log(badge[i].Tod);
        arr.push ({
          numb: badge[i].numb,
          date: '29-09-2022',
          typing: typingName (badge[i].numb, 'tod'),
          price: badge[i].Tod,
        });
      }
    }
    // console.log (arr);
    setData (arr);
  }

  function typingName (numb, typing) {
    if (numb.length === 3 && typing === 'top') {
      return 'สามตัวบน';
    } else if (numb.length === 2 && typing === 'top') {
      return 'สองตัวบน';
    } else if (numb.length === 2 && typing === 'down') {
      return 'สองตัวล่าง';
    } else if (numb.length === 3 && typing === 'tod') {
      return 'สามตัวโต๊ด';
    } else if (numb.length === 1 && typing === 'top') {
      return 'หนึ่งตัวบน';
    } else if (numb.length === 1 && typing === 'down') {
      return 'หนึ่งตัวล่าง';
    }
  }
  return (
    <Table
      striped
      bordered
      hover
      style={{fontSize: '12px'}}
      className="text-center"
    >
      <thead>
        <tr>
          <th>#</th>
          <th>วัน/เวลา</th>
          <th>หมายเลข</th>
          <th>ประเภท</th>
          <th>จำนวน</th>
        </tr>
      </thead>
      <tbody>
        {data.map ((x, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{x.date}</td>
            <td>{x.numb}</td>
            <td>{x.typing}</td>
            <td className="text-end">{numeral (x.price).format ('0,0.00')}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
