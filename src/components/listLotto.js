import React from 'react';
import {InputGroup, Button, Dropdown} from 'react-bootstrap';
import DropdownList from './DropdownList';

const ListLotto = ({lottoList, btnList, active}) => {
  function listLotto () {
    return lottoList.map (
      (val, index) =>
        val.data.length === 0
          ? active.selectBtn === val.country
              ? <Button key={index} variant={active.variant}>
                  {val.country}
                </Button>
              : <Button
                  key={index}
                  variant="outline-secondary"
                  onClick={() => {
                    btnList (val.country, index);
                  }}
                >
                  {val.country}
                </Button>
          : active.selectBtn === val.country
              ? <DropdownList
                  index={index}
                  title={val.country}
                  variant={'primary'}
                  value={val.data}
                  func={btnList}
                />
              : <DropdownList
                  index={index}
                  title={val.country}
                  variant={'outline-secondary'}
                  value={val.data}
                  func={btnList}
                />
    );
  }

  return <InputGroup>{listLotto ()}</InputGroup>;
};

export default ListLotto;
