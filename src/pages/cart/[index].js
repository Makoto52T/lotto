import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { ListIndex } from '../array'
import BCrumb from '../../components/Breadcrumb'
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormControl,
  Dropdown,
  InputGroup,
  Button
} from 'react-bootstrap'
import PayRate from '../../components/PayRate'
import SelectType from '../../components/SelectType'
import Badge from '../../components/Badge'
import AddNumbers from '../../components/AddNumbers'
import AddSixRevers from '../../components/AddSixRevers'
import TableSave from '../../components/TableSave'
import Cookies from 'js-cookie'
import AddOneRow from '../../components/AddOneRow'
import * as func from '../../components/Functions'

export default function Carts () {
  const router = useRouter()
  const index = router.query.index
  const [payRate, setPayRate] = useState({
    title: 'อัตราจ่ายเริ่มต้น',
    data: ['อัตราจ่ายเริ่มต้น'],
    value: 0
  })
  const [data, setData] = useState()
  const [oldBtn, setOldBtn] = useState('2ตัว')
  const [btn, setBtn] = useState([
    { id: 1, name: '2ตัว', variant: 'danger' },
    { id: 2, name: '3ตัว', variant: 'secondary' },
    { id: 3, name: '6กลับ', variant: 'secondary' },
    { id: 4, name: '19 ประตู', variant: 'secondary' },
    { id: 5, name: 'เลขวิ่ง', variant: 'secondary' },
    { id: 6, name: 'วินเลข', variant: 'secondary' }
  ])
  const [selectBtn, setSelect] = useState('2ตัว')
  const defaultBadge = [
    {
      numb: '',
      Top: '',
      Bottom: '',
      Tod: '',
      TodDisable: true,
      BottomDisable: false,
      reverse: false,
      set: 0
    },
    {
      numb: '',
      Top: '',
      Bottom: '',
      Tod: '',
      TodDisable: true,
      BottomDisable: false,
      reverse: false,
      set: 0
    },
    {
      numb: '',
      Top: '',
      Bottom: '',
      Tod: '',
      TodDisable: true,
      BottomDisable: false,
      reverse: false,
      set: 0
    },
    {
      numb: '',
      Top: '',
      Bottom: '',
      Tod: '',
      TodDisable: true,
      BottomDisable: false,
      reverse: false,
      set: 0
    },
    {
      numb: '',
      Top: '',
      Bottom: '',
      Tod: '',
      TodDisable: true,
      BottomDisable: false,
      reverse: false,
      set: 0
    }
  ]
  const [badge, setBadge] = useState(defaultBadge)
  const [six, setSix] = useState(false)
  const [config, setConfig] = useState({})

  useEffect(() => {
    if (index) {
      init()
    }
  }, [index])

  useEffect(() => {
    console.log('1 == ', selectBtn, oldBtn)
    // if (
    //   (selectBtn !== '6กลับ' && oldBtn !== '3ตัว') ||
    //   (selectBtn !== '3ตัว' && oldBtn !== '3ตัว')
    // ) {
    //   console.log ('2 == ',selectBtn, oldBtn);
    //   setBadge ();
    // }
    if (
      (selectBtn === '3ตัว' && oldBtn === '2ตัว') ||
      (selectBtn === '19 ประตู' && (oldBtn === '3ตัว' || oldBtn === 'เลขวิ่ง')) ||
      (selectBtn === '3ตัว' && (oldBtn === '2ตัว' || oldBtn === '19 ประตู')) 
    ) {
      setBadge()
    }
  }, [selectBtn])

  useEffect(() => {
    if (config.row !== undefined) {
      Cookies.set(
        'config',
        JSON.stringify(
          {
            row: config.row,
            top: config.top,
            down: config.down,
            tod: config.tod
          },
          { expires: 30 }
        )
      )
    }
    if (config.row) {
      setBadge()
    } else {
      setBadge(defaultBadge)
    }
  }, [config])

  async function init () {
    let conf = Cookies.get('config')
    if (conf !== undefined) {
      setConfig(JSON.parse(conf))
    }
    // find data now
    let result = ListIndex[index]
    setData(result)
  }

  useEffect(() => {
    btnSelection()
  }, [btn])

  function btnSelection () {
    for (let i = 0; i < btn.length; i++) {
      if (btn[i].variant === 'danger' && btn[i].name === '6กลับ') {
        setSix(true)
      }
    }
  }

  // useEffect (
  //   () => {
  //     if (badge && badge[0].numb !== '') {
  //       getBadge ();
  //     }
  //   },
  //   [badge]
  // );

  function getBadge () {
    if (badge && badge[0].numb !== '') {
      return <Badge badge={badge} />
    } else {
      return <div className='my-3'>{''}</div>
    }
  }

  return (
    <Container>
      {six && (
        <AddSixRevers
          six={six}
          setSix={setSix}
          badge={badge}
          setBadge={setBadge}
          setBtn={setBtn}
          setSelect={setSelect}
          setOldBtn={setOldBtn}
        />
      )}
      <Row className='my-3'>
        <Col>
          <BCrumb index={index} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Dashboard</h1>
          <Alert variant='info'>
            - กดปุ่ม Enter / Tab เพื่อช่องการกรอกข้อมูล
          </Alert>
        </Col>
      </Row>

      <Row>
        <Col md={7}>
          <div className='g-1 alert alert-danger'>
            <PayRate payRate={payRate} config={config} setConfig={setConfig} />
          </div>
          <div className='g-1 alert alert-danger'>
            <Row>
              <Col>
                {config.row ? (
                  <div className='text-left'>
                    <SelectType
                      data={data}
                      btn={btn}
                      setBtn={setBtn}
                      setSelect={setSelect}
                      setBadge={setBadge}
                      selectBtn={selectBtn}
                      setOldBtn={setOldBtn}
                    />
                    {getBadge()}
                    <AddOneRow
                      badge={badge}
                      setBadge={setBadge}
                      selectBtn={selectBtn}
                    />
                  </div>
                ) : (
                  <AddNumbers
                    badge={badge}
                    setBadge={setBadge}
                    config={config}
                    setConfig={setConfig}
                  />
                )}
              </Col>
            </Row>
            <Row className='text-center'>
              <Col>
                <Button
                  size='sm'
                  variant='info'
                  onClick={() => {
                    config.row ? setBadge() : setBadge(defaultBadge)
                  }}
                  style={{ margin: '10px' }}
                >
                  ล้าง
                </Button>
                <Button
                  size='sm'
                  variant='primary'
                  onClick={() => {}}
                  style={{ margin: '10px' }}
                >
                  ยืนยัน
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={5}>
          <TableSave badge={badge} />
        </Col>
      </Row>
    </Container>
  )
}
