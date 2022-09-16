import React, {useState, useEffect} from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Dropdown,
} from 'react-bootstrap';

const ListLotto = ({ lottoList, btnList,active }) => {
    
    
  function listLotto () {
    return lottoList.map (
      (val, index) =>
        val.data.length === 0
          ? active.selectBtn === val.country
              ? <Button key={index} variant={active.variant}>{val.country}</Button>
              : <Button key={index} variant="outline-secondary" onClick={() => {
                btnList (val.country,index);
              }}>{val.country}</Button>
          : <Dropdown key={index}>
              {active.selectBtn === val.country ? 
              <>
                <Dropdown.Toggle variant="primary">
                  {val.country}...
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {val.data.map ((x,i) => <Dropdown.Item key={i}
                      onClick={() => {
                        btnList (x,index);
                      }}>{x}</Dropdown.Item>)}
                </Dropdown.Menu>
              </>
              :
              <>
                <Dropdown.Toggle variant="outline-secondary">
                  {val.country}...
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {val.data.map ((x,i) => (
                    <Dropdown.Item key={i}
                      onClick={() => {
                        btnList (x,index);
                      }}
                    >
                      {x}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </>
              }
            </Dropdown>
    );
  }

  return <InputGroup>{listLotto()}</InputGroup>;
};

export default ListLotto;
