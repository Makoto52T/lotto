import {useRouter} from 'next/router';
import React, {useState, useEffect} from 'react';
import {ListIndex} from '../array';
import BCrumb from '../../components/Breadcrumb';
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormControl,
  Dropdown,
  InputGroup,
} from 'react-bootstrap';
import PayRate from '../../components/PayRate';
import SelectType from '../../components/SelectType';
import Badge from '../../components/Badge';
import AddNumbers from '../../components/AddNumbers';
import AddSixRevers from '../../components/AddSixRevers';

export default function Carts () {
  const router = useRouter ();
  const index = router.query.index;
  const [payRate, setPayRate] = useState ({
    title: 'อัตราจ่ายเริ่มต้น',
    data: ['อัตราจ่ายเริ่มต้น'],
    value: 0,
  });
  const [data, setData] = useState ();
  const [btn, setBtn] = useState ([
    {id: 1, name: '2ตัว', variant: 'danger'},
    {id: 2, name: '3ตัว', variant: 'secondary'},
    {id: 3, name: '6กลับ', variant: 'secondary'},
    {id: 4, name: '19 ประตู', variant: 'secondary'},
    {id: 5, name: 'เลขวิ่ง', variant: 'secondary'},
    {id: 6, name: 'วินเลข', variant: 'secondary'},
  ]);
  const [badge, setBadge] = useState ([
    {
      numb: '',
      Top: '',
      Bottom: '',
      Tod: '',
      TodDisable: true,
      BottomDisable: false,
    },
    {
      numb: '',
      Top: '',
      Bottom: '',
      Tod: '',
      TodDisable: true,
      BottomDisable: false,
    },
    {
      numb: '',
      Top: '',
      Bottom: '',
      Tod: '',
      TodDisable: true,
      BottomDisable: false,
    },
    {
      numb: '',
      Top: '',
      Bottom: '',
      Tod: '',
      TodDisable: true,
      BottomDisable: false,
    },
    {
      numb: '',
      Top: '',
      Bottom: '',
      Tod: '',
      TodDisable: true,
      BottomDisable: false,
    },
  ]);
  const [six, setSix] = useState (false);
  const [oneNine, setOneNine] = useState (false);

  useEffect (
    () => {
      if (index) {
        init ();
      }
    },
    [index]
  );

  async function init () {
    // find data now
    let result = ListIndex[index];
    setData (result);
  }
  useEffect (
    () => {
      btnSelection ();
    },
    [btn]
  );

  function btnSelection () {
    for (let i = 0; i < btn.length; i++) {
      if (btn[i].variant === 'danger') {
        if (btn[i].name === '6กลับ') {
          setSix (true);
        }
      }
    }
  }

  return (
    <Container>
      {six &&
        <AddSixRevers
          six={six}
          setSix={setSix}
          badge={badge}
          setBadge={setBadge}
        />}
      <Row className="my-3">
        <Col><BCrumb index={index} /></Col>
      </Row>
      <Row>
        <Col>
          <h1>Dashboard</h1>
          <Alert variant="info">
            - กดปุ่ม Enter / Tab เพื่อช่องการกรอกข้อมูล
          </Alert>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <div className="g-1 alert alert-danger">
            <PayRate payRate={payRate} />
          </div>
          <div className="g-1 alert alert-danger">
            <SelectType data={data} btn={btn} setBtn={setBtn} />
            <Badge badge={badge} />
            <AddNumbers badge={badge} setBadge={setBadge} />
          </div>
        </Col>
        <Col md={6}>R</Col>
      </Row>
    </Container>
  );
}
