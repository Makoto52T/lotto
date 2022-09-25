import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ListIndex} from '../pages/array';
import * as box from './Alert';
import CardOpen from './CardOpen';

export default function LottoOpen () {
  const typeID = [
    {id: 1, name: 'หวยรายวัน/หวยหุ้น VIP', status: true},
    {id: 0, name: 'รัฐบาล', status: false},
    {id: 2, name: 'หวยหุ้นปกติ', status: true},
    {id: 3, name: 'หวยต่างประเทศ', status: true},
  ];

  return (
    <Row>
      <Col>
        {typeID.map ((val, index) => (
          <div key={index}>
            <h4>{val.name}</h4>
            {val.status
              ? <Row>
                  {ListIndex.map (
                    (x, i) =>
                      val.id === Number (x.typeID) &&
                      <Col md={3}>
                        <CardOpen i={i} data={x} />
                      </Col>
                  )}
                </Row>
              : <Row>
                  <Col className="text-center">{box.CloseMarket ()}</Col>
                </Row>}
          </div>
        ))}
      </Col>
    </Row>
  );
}
