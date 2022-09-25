import React from 'react';
import {Button} from 'react-bootstrap';

export default function BtnList({value, index, config, variant}) {
  return (
    <Button
      key={index}
      size={config.size}
      style={{margin: config.margin,width:config.width}}
      variant={variant}
      onClick={() => {
        config.func (value, index);
      }}
    >
      {value}
    </Button>
  );
}
