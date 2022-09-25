import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ListLotto from '../components/listLotto';
import ListLottoRight from '../components/listLottoRight';
import TableResult from '../components/TableResult';
import DateForm from '../components/dateform';
import {List, Detail} from './array';

export default function ReportPage () {
  const [fromDate, setFromDate] = useState (new Date ());
  const [toDate, setToDate] = useState (new Date ());
  const [active, setActive] = useState ({
    selectBtn: 'ทั้งหมด',
    variant: 'primary',
  });
  const [lottoList, setLottoList] = useState (List);

  function btnList (input, index) {
    setActive ({selectBtn: input, variant: 'primary'});
    setLottoList (prevState =>
      prevState.map ((x, i) => {
        if (i === index) return {country: input, data: x.data, title: x.title};
        return x;
      })
    );
  }

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col md={12} xs={24}>
          <div className="text-center">
            <DateForm
              fromDate={fromDate}
              setFromDate={setFromDate}
              toDate={toDate}
              setToDate={setToDate}
            />
          </div>
          <hr className="my-3" />
          <div>
            <Row>
              <Col className="text-center">
                <ListLotto
                  lottoList={lottoList}
                  btnList={btnList}
                  active={active}
                  setActive={setActive}
                />
                <hr className="my-3" />
                <TableResult detail={Detail} />
              </Col>
              <Col md={2}>
                <h4>หวยทั้งหมด</h4>
                <ListLottoRight
                  lottoList={lottoList}
                  btnList={btnList}
                  active={active}
                  setActive={setActive}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
