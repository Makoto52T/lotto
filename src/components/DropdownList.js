import React from 'react';
import {Dropdown} from 'react-bootstrap';

export default function DropdownList({index, variant, value, func}) {
  return (
    <Dropdown key={index}>
      <Dropdown.Toggle variant={variant}>
        {value.country}...
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {value.data.map ((x, i) => (
          <Dropdown.Item
            key={i}
            onClick={() => {
              func (x, index);
            }}
          >
            {x}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
