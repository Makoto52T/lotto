import React from 'react';
import {Dropdown} from 'react-bootstrap';

export default function DropdownList({index, variant, value, func}) {
  if (value.country) {
    value.title = value.country;
  }
  return (
    <Dropdown key={index}>
      <Dropdown.Toggle variant={variant}>
        {value.title}...
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
