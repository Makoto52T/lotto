import React from 'react';
import {Dropdown} from 'react-bootstrap';

export default function DropdownList({index, title, variant, value, func}) {
  return (
    <Dropdown key={index}>
      <Dropdown.Toggle variant={variant}>
        {title}...
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {value.map ((x, i) => (
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
