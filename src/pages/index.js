import Head from 'next/head';
import Image from 'next/image';
import styles from '../scss/Home.module.scss';
import React, {useState, useEffect} from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Dropdown,
} from 'react-bootstrap';
import Cookies from 'js-cookie';
import {useRouter} from 'next/router';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import ListLotto from '../components/listLotto';
import TableResult from '../components/TableResult';

export default function Home () {
  const [fromDate, setFromDate] = useState (new Date ());
  const [toDate, setToDate] = useState (new Date ());
  const [dateTime, setDate] = useState ({});
  const BtnDate = [
    'วันนี้',
    'เมื่อวาน',
    'สัปดาห์นี้',
    'สัปดาห์ที่แล้ว',
    'เดือนนี้',
    'เดือนที่แล้ว',
  ];
  const [active, setActive] = useState ({
    selectBtn: 'ทั้งหมด',
    variant: 'primary',
  });
  const [lottoList, setLottoList] = useState ([
    {
      country: 'ทั้งหมด',
      data: [],
    },
    {
      country: 'ไทยเย็น',
      data: [],
    },
    {
      country: 'ฮานอย',
      data: [
        'ฮานอยปกติ',
        'ฮานอยพิเศษ',
        'ฮานอยVIP',
        'ฮานอยสตาร์',
        'ฮานอยกาชาด',
        'ฮานอยพัฒนา',
        'ฮานอยสามัคคี',
        'ฮานอย HD',
        'ฮานอย TV',
        'ฮานอย EXTRA',
      ],
    },
    {
      country: 'ลาว',
      data: [
        'ลาววังเวียง',
        'ลาว VIP',
        'ลาวสตาร์',
        'ลาวสตาร์ VIP',
        'ลาวอาเซียน',
        'ลาวกาชาด',
        'ลาวพัฒนา',
        'ลาวสามัคคี',
        'ลาว HD',
        'ลาว TV',
        'ลาว EXTRA',
      ],
    },
    {
      country: 'จีน',
      data: ['จีนเช้า', 'จีนบ่าย', 'จีนเช้า VIP', 'จีนบ่าย VIP'],
    },
    {
      country: 'ฮั่งเส็ง',
      data: [
        'ฮั่งเส็งเช้า',
        'ฮั่งเส็งบ่าย',
        'ฮั่งเส็งเช้า VIP',
        'ฮั่งเส็งบ่าย VIP',
      ],
    },
    {
      country: 'นิเคอิ',
      data: ['นิเคอิเช้า', 'นิเคอิบ่าย', 'นิเคอิ VIP', 'นิเคอิบ่าย VIP'],
    },
    {
      country: 'อื่นๆ',
      data: [
        'อินเดีย',
        'อียิปต์',
        'ไต้หวัน',
        'ไต้หวัน VIP',
        'เกาหลี',
        'เกาหลี VIP',
        'สิงคโปร์',
        'สิงคโปร์ VIP',
        'อังกฤษ',
        'อังกฤษ VIP',
        'เยอรมัน',
        'เยอรมัน VIP',
        'รัสเซีย',
        'รัสเซีย VIP',
        'ดาวโจนส์',
        'ดาวโจนส์ VIP',
      ],
    },
  ]);

  const detail = [
    [
      '140920221',
      'ลาวพัฒนา',
      '15/09/2022',
      '15/09/2022',
      0,
      440,
      0,
      0,
      440,
      'เพชร',
      '',
    ],
    [
      '140920222',
      'ฮานอย VIP',
      '15/09/2022',
      '15/09/2022',
      0,
      551,
      0,
      0,
      551,
      'ลงการ',
      '',
    ],
  ];

  function btnList (input, index) {
    console.log (input);
    setActive ({selectBtn: input, variant: 'primary'});
    setLottoList (prevState =>
      prevState.map ((x, i) => {
        console.log (x);
        if (i === index) return {country: input, data: x.data};
        return x;
      })
    );
  }

  function getBtnDate () {
    return BtnDate.map ((val, i) => (
      <Button
        key={i}
        style={{margin: '10px'}}
        size="sm"
        variant="primary"
        onClick={() => {
          getDate (val);
        }}
      >
        {val}
      </Button>
    ));
  }

  async function getDate (input) {
    let d = new Date ();
    if (input === 'วันนี้') {
      setFromDate (d);
      setToDate (d);
    } else if (input === 'เมื่อวาน') {
      d.setDate (d.getDate () - 1);
      setFromDate (d);
      setToDate (d);
    } else if (input === 'สัปดาห์นี้') {
      setFromDate (new Date (d.setDate (d.getDate () - d.getDay () + 1)));
      setToDate (new Date (d.setDate (d.getDate () - d.getDay () + 7)));
    } else if (input === 'สัปดาห์ที่แล้ว') {
      setFromDate (new Date (d.setDate (d.getDate () - d.getDay () - 6)));
      let e = new Date ();
      setToDate (new Date (e.setDate (e.getDate () - e.getDay ())));
    } else if (input === 'เดือนนี้') {
      setFromDate (new Date (d.getFullYear (), d.getMonth (), 1));
      setToDate (new Date (d.getFullYear (), d.getMonth () + 1, 0));
    } else if (input === 'เดือนที่แล้ว') {
      setFromDate (new Date (d.getFullYear (), d.getMonth () - 2, 1));
      setToDate (new Date (d.getFullYear (), d.getMonth () - 1, 0));
    }
  }

  return (
    <Container>
      <Row className="justify-content-center text-center my-5">
        <Col md={12} xs={24} />
        {/* <InputGroup className="mb-3"> */}
        <InputGroup.Text>
          <label style={{margin: '10px'}}>จาก</label>
          <DatePicker
            selected={fromDate}
            onChange={date => setFromDate (date)}
            dateFormat="dd/MM/yyyy"
          />
          <label style={{margin: '10px'}}>ถึง</label>
          <DatePicker
            selected={toDate}
            onChange={date => setToDate (date)}
            dateFormat="dd/MM/yyyy"
          />
          {getBtnDate ()}
        </InputGroup.Text>
        {/* </InputGroup> */}
        <hr className="my-3" />
        <ListLotto
          lottoList={lottoList}
          btnList={btnList}
          active={active}
          setActive={setActive}
        />
        <hr className="my-3" />
        <TableResult detail={detail} />
      </Row>
    </Container>
  );
}
