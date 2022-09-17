import React from 'react';
import {Button} from 'react-bootstrap';

export default function BtnList({func, variant, value, index}) {
  return (
    <Button
      key={index}
      size="sm"
      style={{margin: '3px'}}
      variant={variant}
      onClick={() => {
        func (value, index);
      }}
    >
      {value}
    </Button>
  );
}
