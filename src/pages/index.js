import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import LottoOpen from '../components/lottoOpen';
import * as box from '../components/Alert';

export default function Home () {
  return (
    <Container>
      <Row className='my-5'>
        <Col className='text-center'>{box.Warning ()}</Col>
      </Row>
      <Row>
        <Col>
          <LottoOpen />
        </Col>
      </Row>

    </Container>
  );
}
