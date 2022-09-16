import React, {useState, useEffect} from 'react';
import 'datatables.net-dt/css/jquery.dataTables.css';

const $ = require ('jquery');
$.DataTable = require ('datatables.net');

import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Dropdown,
  Table,
  FormControl,
} from 'react-bootstrap';

const TableResult = ({detail}) => {
  const [row, setRow] = useState (50);
  const [loadTb, setLoadTb] = useState (true);

  useEffect (() => {
    if (loadTb) {
      $ ('#example').DataTable ({
        data: detail,
        columns: [
          {title: '#'},
          {title: 'ประเภท'},
          {title: 'งวด'},
          {title: 'เวลา.'},
          {title: 'สถานะ'},
          {title: 'ยอดรวม'},
          {title: 'ส่วนลด'},
          {title: 'ถูกรางวัล'},
          {title: 'คงเหลือ'},
          {title: 'หมายเหตุ'},
          {title: 'ลบ'},
        ],
      });
      setLoadTb (false);
    }
  });

  function filterData (input) {
    // document.getElementById('example').value.DataTable();
  }

  function listLotto () {
    return data.map ((val, i) => (
      <tr key={i}>
        <td>{val.id}</td>
        <td>{val.typing}</td>
        <td>{val.date}</td>
        <td>{val.time}</td>
        <td>{val.status}</td>
        <td>{val.total}</td>
        <td>{val.discount}</td>
        <td>{val.reward}</td>
        <td>{val.balance}</td>
        <td>{val.note}</td>
        <td>{val.del}</td>
      </tr>
    ));
  }

  return <Table id="example" className="display" width="100%" />;
};

export default TableResult;
