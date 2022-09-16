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
import ListLotto from '../components/listLotto';
import TableResult from '../components/TableResult';
import DateForm from '../components/dateform';

export default function Home () {
  const [fromDate, setFromDate] = useState (new Date ());
  const [toDate, setToDate] = useState (new Date ());
  const [dateTime, setDate] = useState ({});
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

  return (
    <Container>
      <Row className="justify-content-center text-center my-5">
        <Col md={12} xs={24} />
        {/* <InputGroup className="mb-3"> */}
        <DateForm
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
        />
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
