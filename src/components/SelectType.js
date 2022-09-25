import React from 'react';
import {Row, Col} from 'react-bootstrap';
import BtnList from './BtnList';

export default function SelectType({data, btn, setBtn}) {
  let config = {
    size: 'sm',
    margin: '3px',
    func: btnList,
    width: '100%',
  };
  function getBtn () {
    return btn.map ((x, i) => (
      <Col key={i} md={4}>
        <BtnList value={x.name} index={i} config={config} variant={x.variant} />
      </Col>
    ));
  }

  function btnList (input, index) {
    setBtn (prevState =>
      prevState.map ((x, i) => {
        if (i === index) return {name: x.name, variant: 'danger'};
        return {name: x.name, variant: 'secondary'};
      })
    );
  }

  if (data) {
    return (
      <Row>
        <Col>
          <h5>แทงเร็ว</h5>
          <p>{data.lottoName} [{data.LottoDate}]</p>
          <Row>
            {getBtn ()}
          </Row>
        </Col>
      </Row>
    );
  } else {
    return <div />;
  }
}
