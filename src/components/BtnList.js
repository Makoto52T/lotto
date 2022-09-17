import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';

export default function BtnList({value, index, config, variant}) {
  useEffect (() => {
    if (config) {
      console.log (config);
    }
  }, []);
  return (
    <Button
      key={index}
      size={config.size}
      style={{margin: config.margin}}
      variant={variant}
      onClick={() => {
        config.func (value, index);
      }}
    >
      {value}
    </Button>
  );
}
