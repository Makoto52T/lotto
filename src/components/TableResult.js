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

  return <Table id="example" className="display" width="100%" />;
};

export default TableResult;
