import React from 'react';
import {InputGroup, Button, Dropdown} from 'react-bootstrap';

const ListLottoNew = ({lottoList, btnList, active,btnListNew}) => {
  function listLotto () {
    return lottoList.map (
      (val, index) =>
        val.data.length === 0
          ? active.selectBtn === val.country ?
          <Button key={index} size='sm' style={{margin:"3px"}} variant={active.variant}>{val.country}</Button>:
          <Button key={index} size='sm' style={{margin:"3px"}} variant="outline-secondary" onClick={() => {
            btnList (val.country, index);
          }}>{val.country}</Button>
          : <>
            <h5 style={{margin:"5px"}}>{val.title}</h5>
            {val.data.map ((x, i) => active.selectBtn === x ?
              <Button key={i} size='sm' style={{margin:"3px"}} variant={active.variant}>{x}</Button>:
              <Button key={i} size='sm' style={{margin:"3px"}} variant="outline-secondary" onClick={() => {
                btnListNew (x, index);
              }}>{x}</Button>
            )}
          </>
    );
  }

  return <>{listLotto ()}</>;
};

export default ListLottoNew;
