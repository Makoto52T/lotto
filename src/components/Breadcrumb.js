import React from 'react';
import {Breadcrumb} from 'react-bootstrap';

export default function BCrumb({index}) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">หน้าหลัก</Breadcrumb.Item>
      <Breadcrumb.Item href={`/cart/${index}`}>cart</Breadcrumb.Item>
      <Breadcrumb.Item active>{index}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
